import requests
import numpy as np
from PIL import Image
from ultralytics import YOLO
import io
import time

# Initialize YOLOv8 model
model = YOLO("yolov8m.pt") 

# URL for the latest PNG
image_url = "https://recordings-cdn-s.lp-playback.studio/hls/c1fc9a0i5exr0qlk/fef27bf9-0eb2-46be-82ef-1b04ddd338f8/source/latest.png"

def fetch_and_process_image():
    try:
        # Fetch the PNG image from the URL
        response = requests.get(image_url)

        # Ensure the request was successful
        if response.status_code == 200:
            # Convert the image data to a PIL image
            image_data = io.BytesIO(response.content)
            image = Image.open(image_data)

            # Convert the PIL image to a numpy array (OpenCV format)
            frame = np.array(image)

            # Perform object detection with YOLOv8 model
            results = model(frame)  # Perform detection on the current frame

            # Process results: Counting detected people (class_id 0 corresponds to 'person')
            person_count = 0
            for result in results:  # Iterate over the results (detections)
                for box in result.boxes:  # Each 'box' corresponds to a detected object
                    class_id = int(box.cls)  # Class ID of the detected object
                    if class_id == 0:  # Check if the detected object is a 'person' (class_id = 0)
                        person_count += 1

            print(f"Number of people detected: {person_count}")
        else:
            print(f"Failed to fetch image, status code: {response.status_code}")

    except Exception as e:
        print(f"Error fetching or processing image: {e}")

# Run the fetch-and-process task periodically (every minute in this case)
while True:
    fetch_and_process_image()  # Fetch and process the image
    time.sleep(15)  # Wait for 60 seconds before fetching again
