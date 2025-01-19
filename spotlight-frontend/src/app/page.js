"use client";
import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import VideoPlayer from "@/app/components/videoPlayer";
import WelcomeSection from "./components/welcomesection";
import LocationCard from "./components/locationcard";
import Link from 'next/link';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const locations = [
    { id: 1, name: 'Blue Chip', src: '/images/BlueChip.jpg', progress: '70%' },
    { id: 2, name: 'The Nest', src: '/images/Nest.jpg', progress: '50%' },
    { id: 3, name: 'Woodward Library', src: '/images/Woodward.jpg', progress: '90%' },
    { id: 4, name: 'Koerner Library', src: '/images/Koerner.jpg', progress: '15%' },
  ];

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="min-h-screen pb-20 sm:p-10 sm:px-64 font-[family-name:var(--font-geist-sans)] bg-background">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        <WelcomeSection />

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
          <div className="flex-1 bg-white text-black p-10 rounded-3xl w-full sm:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Recommended</h2>
            <div className="flex flex-col gap-4">
              {locations.map(location => (
                <Link key={location.id} href='/screens/livevideo'>
                  <LocationCard location={location} />
                </Link>))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}