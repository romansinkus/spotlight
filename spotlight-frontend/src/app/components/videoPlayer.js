import React from 'react';
import './../globals.css'; // Import your styles

const VideoPlayer = ({ playbackId }) => {
    return (
        <div className="relative w-2/3 bg-gray-800 rounded-lg pb-40 pt-8 pl-8 pr-8">
            <iframe
                className="w-full h-full border-none rounded-lg"
                src={`https://lvpr.tv?v=${playbackId}`}
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                frameBorder="0"
            />
            <div className="bg-gray-500 border rounded-lg border-gray-500 mt-8 py-10"></div> {/* Add margin to push this down */}
        </div>
    );
};


export default VideoPlayer;