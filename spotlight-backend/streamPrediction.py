import requests
import numpy as np
from PIL import Image
from ultralytics import YOLO
import io
import time
import os
import json
import livepeer

api_key = os.getenv('API_KEY')

class StreamProcessor:
    def __init__(self, model_path,interval):
        # Initialize the YOLOv8 model
        self.model = YOLO(model_path) 
        self.interval = interval  # Interval to fetch and process the image (in seconds)
        self.stream_data = {}  # To store the number of detected people and the playbackID
        self.livepeer = livepeer.Livepeer(api_key="10a3ce65-6d6b-494c-8fee-0dd9d83fd794")
        self.data = []

    def fetch_and_process_image(self, url, playbackID):
        """Fetch the latest image and run detection."""
        try:
            # Fetch the PNG image from the URL
            response = requests.get(url)

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

                self.stream_data[playbackID] = person_count
                print(f"Number of people detected: {person_count}. playbackID: {playbackID}")
            else:
                print(f"Failed to fetch image, status code: {response.status_code}")

        except Exception as e:
            print(f"Error fetching or processing image: {e}")

    def generate_urls(self, playbackID):
        meta_data = self.livepeer.playback.get(id=playbackID).playback_info.meta
        live = bool(meta_data.live)

        if live:
            url = meta_data.source[2].url # PNG Url
            return [playbackID, url]
        else:
            return None

    def get_streams(self):
        url_list = []
        data = self.livepeer.stream.get_all().data

        for i in data:
            id = i.playback_id
            if id is not None:
                data = self.generate_urls(id)
                if data:
                    url_list.append(data)

        return url_list

    def start_processing(self):
        """Process image batches extracted from each stream"""

        # Reset stream data for new batch of frames
        self.stream_data = {}

        self.data = self.get_streams()
        if self.data:
            for stream in self.data:
                self.fetch_and_process_image(playbackID=stream[0], url=stream[1])  # Fetch and process the image
        else:
            print("No Data Yet")
        print(self.stream_data)
        time.sleep(self.interval)  # Wait before fetching the next image
    
    def get_count(self, playbackID):
        try:
            count = self.stream_data[playbackID]
            return count
        except:
            print("Count does not exist for playbackID")


# Example usage:
if __name__ == "__main__":
    # Initialize the StreamProcessor with your YOLO model path and image URL
    stream_processor = StreamProcessor(model_path="yolov8m.pt", interval=10)
    
    # Start processing
    while True:
        stream_processor.start_processing()
        people = stream_processor.get_count("c1fc9a0i5exr0qlk")
        print(f"Person Count: {people}")
