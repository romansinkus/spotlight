import streamPrediction as sp
import time
from flask import Flask, jsonify
import threading
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Global variable to store the number of detected people
latest_person_count = 0
fetch_interval = 10
stream_running = True  # To safely stop the stream processing thread

def process_stream():
    global latest_person_count, stream_running

    temp_url = "https://recordings-cdn-s.lp-playback.studio/hls/88813ytumj696bed/8b57002b-31f6-4ae0-bb47-a736436b6984/source/latest.png"
    stream_processor = sp.StreamProcessor(model_path="yolov8m.pt", url=temp_url, interval=10)

    while stream_running:
        stream_processor.fetch_and_process_image()
        latest_person_count = stream_processor.get_person_count()
        time.sleep(fetch_interval)

# Background thread to process the stream
stream_thread = threading.Thread(target=process_stream, daemon=True)
stream_thread.start()

@app.route('/person_count', methods=['GET'])
def get_person_count():
    print(latest_person_count)
    """API endpoint to return the latest person count."""
    return jsonify({"person_count": latest_person_count})

@app.route('/stop_stream', methods=['POST'])
def stop_stream():
    """Endpoint to stop the stream processing safely."""
    global stream_running
    stream_running = False
    return jsonify({"message": "Stream processing stopped."})

if __name__ == '__main__':
    app.run(debug=True)
