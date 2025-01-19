from flask import Flask, jsonify
import threading
import cv2
from ultralytics import YOLO
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Livepeer HLS stream URL
livepeer_url = "https://livepeercdn.studio/hls/88813ytumj696bed/index.m3u8"  # Replace with your stream URL

# Initialize YOLOv8 model
model = YOLO("yolov8m.pt")  # Replace with your model file

# Global variable to store the number of detected people
latest_person_count = 0
stream_running = True  # To safely stop the stream processing thread

def process_stream():
    global latest_person_count, stream_running

    # Open the stream with OpenCV
    cap = cv2.VideoCapture(livepeer_url)

    if not cap.isOpened():
        print("Error: Unable to open the video stream.")
        return

    frame_counter = 0
    update_interval = 45  # Update every 45 frames

    while stream_running:
        ret, frame = cap.read()
        if not ret:
            print("Stream ended or cannot fetch frame.")
            break

        # Increment frame counter
        frame_counter += 1

        if frame_counter >= update_interval:
            # Perform object detection with the YOLOv8 model
            results = model(frame)

            person_count = 0
            for result in results:  # Iterate over the results (detections)
                for box in result.boxes:  # Each 'box' corresponds to a detected object
                    class_id = int(box.cls)  # Class ID of the detected object
                    if class_id == 0:  # Check if the detected object is a 'person' (class_id = 0)
                        person_count += 1

            latest_person_count = person_count

            # Reset the frame counter
            frame_counter = 0

    cap.release()

# Background thread to process the stream
stream_thread = threading.Thread(target=process_stream, daemon=True)
stream_thread.start()

@app.route('/person_count', methods=['GET'])
def get_person_count():
    """API endpoint to return the latest person count."""
    print(latest_person_count)
    return jsonify({"person_count": latest_person_count})

@app.route('/stop_stream', methods=['POST'])
def stop_stream():
    """Endpoint to stop the stream processing safely."""
    global stream_running
    stream_running = False
    return jsonify({"message": "Stream processing stopped."})

if __name__ == '__main__':
    app.run(debug=True)