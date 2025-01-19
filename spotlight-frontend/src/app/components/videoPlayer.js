import React from 'react';
import './../globals.css'; // Import your styles

const VideoPlayer = ({ playbackId }) => {
    return (
        <iframe
            className="w-full h-128 border-none rounded-lg mb-10 flex-grow"
            src={`https://lvpr.tv?v=${playbackId}`}
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            frameBorder="0"
        />

    );
};


export default VideoPlayer;