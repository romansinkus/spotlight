import requests
import numpy as np
from PIL import Image
from ultralytics import YOLO
import io
import time

class StreamProcessor:
    def __init__(self, model_path, url, interval):
        # Initialize the YOLOv8 model
        self.model = YOLO(model_path)  # Replace with the path to your model file
        self.url = url
        self.interval = interval  # Interval to fetch and process the image (in seconds)
        self.person_count = 0  # To store the number of detected people

    def fetch_and_process_image(self):
        """Fetch the latest image and run detection."""
        try:
            # Fetch the PNG image from the URL
            response = requests.get(self.url)

            # Ensure the request was successful
            if response.status_code == 200:
                # Convert the image data to a PIL image
                image_data = io.BytesIO(response.content)
                image = Image.open(image_data)

                # Convert the PIL image to a numpy array (OpenCV format)
                frame = np.array(image)

                # Perform object detection with YOLOv8 model
                results = self.model(frame)  # Perform detection on the current frame

                # Process results: Counting detected people (class_id 0 corresponds to 'person')
                person_count = 0
                for result in results:  # Iterate over the results (detections)
                    for box in result.boxes:  # Each 'box' corresponds to a detected object
                        class_id = int(box.cls)  # Class ID of the detected object
                        if class_id == 0:  # Check if the detected object is a 'person' (class_id = 0)
                            person_count += 1

                self.person_count = person_count
                print(f"Number of people detected: {self.person_count}")
            else:
                print(f"Failed to fetch image, status code: {response.status_code}")

        except Exception as e:
            print(f"Error fetching or processing image: {e}")

    def start_processing(self):
        """Start the image fetching and processing task periodically."""
        while True:
            self.fetch_and_process_image()  # Fetch and process the image
            time.sleep(self.interval)  # Wait before fetching the next image

    def get_person_count(self):
        """Getter for person_count."""
        return self.person_count

# Example usage:
if __name__ == "__main__":
    # URL for the latest PNG
    image_url = "https://recordings-cdn-s.lp-playback.studio/hls/c1fc9a0i5exr0qlk/fef27bf9-0eb2-46be-82ef-1b04ddd338f8/source/latest.png"
    
    # Initialize the StreamProcessor with your YOLO model path and image URL
    stream_processor = StreamProcessor(model_path="yolov8m.pt", url=image_url, interval=10)
    
    # Start processing
    stream_processor.start_processing()
