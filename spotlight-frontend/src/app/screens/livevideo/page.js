"use client";
import HourlyUpdates from "@/app/components/hourlyupdatecard";
import Layout from '../../layout';
import VideoPlayer from "@/app/components/videoPlayer";
import Comments from "@/app/components/comments";
import { useState } from 'react';


export default function IKBLive() {

    const [counter, setCounter] = useState(0);

    const handleButtonClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="min-h-screen p-0 px-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-4 items-center sm:items-start w-full">
                <h1 className="text-4xl font-bold self-start  text-black p-4 w-full">
                    Irving K. Barber Library
                </h1>
                <div className="flex gap-4 mb-4 w-full">
                    <button className="bg-select-colour text-black py-2 px-4 rounded-full w-64">Riddington Room</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Musqueam Reading Room</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Peace River Classroom</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Ike's Cafe</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex flex-col w-2/3 bg-white rounded-lg pb-40 pt-8 pl-8 pr-8">
                        <VideoPlayer playbackId="88813ytumj696bed" />
                        <div className="bg-gray-500 border rounded-lg border-gray-500 mt-8 py-10 flex-grow flex justify-end">
                            <div className="text-white ml-4">Counter: {counter}</div>
                            <button
                                className="bg-black text-white py-4 px-8 text-lg rounded-full hover:bg-blue-600 m-2"
                                onClick={handleButtonClick}
                            >
                                Refresh
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 w-full sm:w-1/3 text-black">
                        <div className="flex-1  p-4 rounded-lg">
                            <HourlyUpdates />
                        </div>
                        <div className="flex-1  p-4 rounded-lg">
                            <Comments />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};