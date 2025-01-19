import cv2
from ultralytics import YOLO
from ultralytics.engine.results import Results

# Livepeer HLS stream URL
# livepeer_url = "https://livepeercdn.studio/hls/c1fc9a0i5exr0qlk/index.m3u8" # Roger
livepeer_url = "https://livepeercdn.studio/hls/88813ytumj696bed/index.m3u8"  # Roman

# Initialize YOLOv8 model (use your trained model path or a pretrained one)
model = YOLO("yolov8m.pt")  # Replace with your model file

# Open the stream with OpenCV
cap = cv2.VideoCapture(livepeer_url)

if not cap.isOpened():
    print("Error: Unable to open the video stream.")
    exit()

# Set up frame update interval (X frames)
frame_counter = 0
update_interval = 45  # Update every 45 frames

# Process the stream
while True:
    ret, frame = cap.read()
    if not ret:
        print("Stream ended or cannot fetch frame.")
        break

    # Increment frame counter
    frame_counter += 1

    if frame_counter >= update_interval:
        # Perform object detection with the YOLOv8 model
        results = model(frame)  # Frame is passed to the model for inference

        person_count = 0
        for result in results:  # Iterate over the results (detections)
            for box in result.boxes:  # Each 'box' corresponds to a detected object
                class_id = int(box.cls)  # Class ID of the detected object
                if class_id == 0:  # Check if the detected object is a 'person' (class_id = 0)
                    person_count += 1

        # Output the number of people detected in the frame
        print(f"Number of people detected: {person_count}")

        # Reset the frame counter after update
        frame_counter = 0
