import cv2
from ultralytics import YOLO

# Livepeer HLS stream URL
livepeer_url = "https://livepeercdn.studio/hls/c1fc9a0i5exr0qlk/index.m3u8"

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

        # Reset the frame counter after update
        frame_counter = 0
