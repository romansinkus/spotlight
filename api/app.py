import streamPrediction as sp
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/person_count', methods=['GET'])
def get_person_count():
    """API endpoint to fetch and process the latest person count."""
    # Fetch and process stream on-demand
    temp_url = "https://recordings-cdn-s.lp-playback.studio/hls/88813ytumj696bed/8b57002b-31f6-4ae0-bb47-a736436b6984/source/latest.png"
    stream_processor = sp.StreamProcessor(model_path="yolov8m.pt", url=temp_url, interval=10)
    stream_processor.fetch_and_process_image()
    latest_person_count = stream_processor.get_person_count()

    return jsonify({"person_count": latest_person_count})

@app.route('/stop_stream', methods=['POST'])
def stop_stream():
    """Dummy endpoint to align with the original API structure."""
    return jsonify({"message": "Stream processing stopped (stateless version)."})