import React, { useEffect, useState } from 'react';
import VerticalHours from './verticalhours';
import { IoMdRefresh } from "react-icons/io";

const VideoDetails = ({ personCount, handleButtonClick, capacity, title }) => {
    const [seatsAvailable, setSeatsAvailable] = useState(capacity - personCount);

    useEffect(() => {
        setSeatsAvailable(capacity - personCount);
    }, [personCount, capacity]);

    return (
        <div className="rounded-lg border py-4 mb-10 flex">
            {/* Left Side - Split into top and bottom */}
            <div className="flex flex-col justify-top basis-1/3 flex-grow-0 mr-4">
                {/* Title in the top-left */}
                <div className="text-black text-2xl font-bold ml-4 mb-4">{title}</div>

                {/* Content below the title */}
                <div className="flex flex-col items-center">
                    <div className="text-black">{seatsAvailable}/{capacity} seats available</div>
                    <div className="bg-gray-300 rounded-full h-4 mt-1 w-3/4">
                        <div className="bg-progress-bar h-4 rounded-full" style={{ width: `${(seatsAvailable / capacity) * 100}%` }}></div>
                    </div>
                    <div className="text-black mt-4">Noise Level</div>
                    <div className="bg-gray-300 rounded-full h-4 mt-1 w-3/4">
                        <div className="bg-progress-bar h-4 rounded-full" style={{ width: `${(seatsAvailable / capacity) * 100}%` }}></div>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <button
                        className="bg-black text-white py-2 px-8 [btext-lg rounded-full hover:bg-blue-600 m-4 flex items-center mt-6"
                        onClick={handleButtonClick}
                    >
                        Refresh
                        <IoMdRefresh className="text-white text-xl" />
                    </button>
                </div>
            </div>

            {/* Right Side - Button and Gray Div */}
            <div className="flex flex-col justify-center basis-2/3 flex-grow-0">
                <VerticalHours />

            </div>
        </div>
    );
};

export default VideoDetails;