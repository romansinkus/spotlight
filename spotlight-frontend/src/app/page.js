"use client";

import {useEffect, useState} from 'react';
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import VideoPlayer from "@/app/components/videoPlayer";
import WelcomeSection from "./components/welcomesection";
import LocationCard from "./components/locationcard";
import Link from 'next/link';
import VideoDetails from "@/app/components/videoDetails";

export default function Home() {
    const [personCount, setPersonCount] = useState(0);

    const locations = [
        {id: 1, name: 'Blue Chip', src: '/images/BlueChip.jpg', progress: '70%'},
        {id: 2, name: 'The Nest', src: '/images/Nest.jpg', progress: '50%'},
        {id: 3, name: 'Woodward Library', src: '/images/Woodward.jpg', progress: '90%'},
        {id: 4, name: 'Koerner Library', src: '/images/Koerner.jpg', progress: '15%'},
    ];

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
        updatePersonCount(); // Fetch and update person count
    }, []);

    return (
        <div className="min-h-screen pb-20 sm:p-10 sm:px-32 font-[family-name:var(--font-geist-sans)] bg-background">
            <main className="flex flex-col gap-8 items-center sm:items-start w-full">
                <WelcomeSection/>

                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex flex-col w-2/3 bg-white rounded-lg pb-30 pt-8 pl-8 pr-8">
                        <VideoPlayer playbackId="88813ytumj696bed"/>
                        <VideoDetails personCount={personCount} handleButtonClick={updatePersonCount} capacity={60}
                                      title={"Woodward Library 1st Floor"}/>
                    </div>
                    <div className="flex-1 bg-white text-black p-10 rounded-lg w-full sm:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Recommended</h2>
                        <div className="flex flex-col gap-4">
                            {locations.map(location => (
                                <Link key={location.id} href='/screens/livevideo'>
                                    <LocationCard location={location}/>
                                </Link>))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}