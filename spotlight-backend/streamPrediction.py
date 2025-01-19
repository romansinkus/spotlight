import subprocess
import numpy as np
from ultralytics import YOLO
from ultralytics.engine.results import Results

# Livepeer HLS stream URL
livepeer_url = "https://livepeercdn.studio/hls/c1fc9a0i5exr0qlk/index.m3u8"  # Roger
#livepeer_url = "https://livepeercdn.studio/hls/88813ytumj696bed/index.m3u8"  # Roman

# Initialize YOLOv8 model
model = YOLO("yolov8m.pt")

# FFmpeg command to stream frames from HLS
ffmpeg_cmd = [
    "ffmpeg",
    "-i", livepeer_url,              # Input stream
    "-f", "image2pipe",              # Output as raw image stream
    "-pix_fmt", "bgr24",             # Pixel format for OpenCV
    "-vcodec", "rawvideo",           # Output raw video
    "-an",                           # Disable audio
    "-sn",                           # Disable subtitles
    "-"                              # Write to stdout
]

# Open FFmpeg subprocess
process = subprocess.Popen(ffmpeg_cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, bufsize=10**8)

# Frame dimensions (adjust based on the HLS stream resolution)
frame_width, frame_height = 1280, 720
frame_size = frame_width * frame_height * 3  # 3 channels for RGB

# Set up frame update interval (X frames)
frame_counter = 0
update_interval = 45  # Update every 45 frames

while True:
    # Read raw frame data from FFmpeg stdout
    raw_frame = process.stdout.read(frame_size)
    if not raw_frame:
        print("Stream ended or cannot fetch frame.")
        break

    # Convert raw frame to a numpy array
    frame = np.frombuffer(raw_frame, np.uint8).reshape((frame_height, frame_width, 3))

    # Increment frame counter
    frame_counter += 1

    # Perform YOLO object detection every 'update_interval' frames
    if frame_counter >= update_interval:
        results = model(frame)  # Perform detection on the current frame

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
