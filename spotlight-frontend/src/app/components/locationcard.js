import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const LocationCard = ({ location }) => {
    return (
        <div className="flex items-center gap-4">
            <img src={location.src} alt={location.name} className="w-48 h-24 object-cover rounded" />
            <div className="flex-grow">
                <div className="text-lg font-medium">{location.name}</div>
                <div className="bg-gray-300 rounded-full h-4 mt-1">
                    <div className="bg-progress-bar h-4 rounded-full" style={{ width: location.progress }}></div>
                </div>
                <div className="flex flex-row gap-4 mt-2 items-center">
                    <div className="text-sm text-gray-400 mt-1">Space Available</div>
                    <IoIosCheckmarkCircleOutline size={24} />
                    <FaRegHeart size={24} />
                </div>
            </div>
        </div>
    );
};

export default LocationCard;