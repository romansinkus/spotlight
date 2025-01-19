"use client";
import HourlyUpdates from "@/app/components/hourlyupdatecard";
import Layout from '../../layout';
import VideoPlayer from "@/app/components/videoPlayer";
import Comments from "@/app/components/comments";
import { useState, useEffect } from 'react';
import VericalHours from "@/app/components/verticalhours";
import VideoDetails from "@/app/components/videoDetails";

export default function BlueChip() {
    const [personCount, setPersonCount] = useState(0);
    const [counter, setCounter] = useState(0);

    const updatePersonCount = async () => {
        try {
            // Send a request to your Flask API to get the person count
            const response = await fetch('http://127.0.0.1:5000/person_count'); // Update the URL if necessary
            if (response.ok) {
                const data = await response.json();
                setPersonCount(data.person_count);
            } else {
                console.error('Failed to fetch person count:', response.status);
            }
        } catch (error) {
            console.error('Error while fetching person count:', error);
        }
    };

    useEffect(() => {
        updatePersonCount().then(r => { });
    }, []);

    return (
        <div className="min-h-screen p-0 px-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-4 items-center sm:items-start w-full">
                <h1 className="text-4xl font-bold self-start  text-black p-4 w-full">
                    Life Sciences Institute
                </h1>
                <div className="flex gap-4 mb-4 w-full">
                    <button className="bg-select-colour text-black py-2 px-4 rounded-full w-64">Atrium 1</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Atrium 2</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Room 1003</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex flex-col w-2/3 bg-white rounded-lg pt-8 pl-8 pr-8">
                        <VideoPlayer playbackId="88813ytumj696bed" />
                        <VideoDetails personCount={personCount} handleButtonClick={updatePersonCount} capacity={60}
                            title={"Life Sciences Institute - Atrium 1"} />
                    </div>
                    <div className="flex-1  p-4 rounded-lg">
                        <Comments />
                    </div>
                </div>
            </main>
        </div>
    );
};