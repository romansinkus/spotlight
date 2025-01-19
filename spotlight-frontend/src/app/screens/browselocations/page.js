import React from 'react';
import Link from 'next/link';
import { FiHeart } from "react-icons/fi";

const locations = [
    { id: 1, name: 'Irving K Barber Library', image: '/images/IKB.jpg' },
    { id: 2, name: 'Koerners Library', image: '/images/Koerner.jpg' },
    { id: 3, name: 'Woodward Library', image: '/images/Woodward.jpg' },
    { id: 4, name: 'The Nest', image: '/images/Nest.jpg' },
    { id: 5, name: 'Bird Coop', image: '/images/RecNorth.jpg' },
    { id: 6, name: 'Blue Chip Cafe', image: '/images/BlueChip.jpg' },
];

const BrowseLocations = () => {
    return (
        <div className="bg-background">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Browse Locations On Campus</h1>
                <div className="flex gap-4 mb-6">
                    <button className="bg-filter hover:opacity-70 py-1 px-6 rounded-full">All</button>
                    <button className="bg-white hover:opacity-70 py-1 px-6 rounded-full">Libraries</button>
                    <button className="bg-white hover:opacity-70 py-1 px-6 rounded-full">Gym</button>
                    <button className="bg-white hover:opacity-70 py-1 px-6 rounded-full">Food</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations.map(location => (
                        <div key={location.id} className="rounded-2xl overflow-hidden bg-transparent group">
                            <Link href='screens\livevideo'>
                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        className="w-full h-56 object-cover cursor-pointer rounded-2xl group-hover:opacity-70"
                                    />
                            </Link>
                            <div className="py-4 w-full grid grid-cols-3 gap-4">
                                <div className='col-span-2'>
                                    <div className='w-full grid grid-cols-3 gap-4'>
                                        <div className="bg-white border-1 border-progress-bar rounded-full h-5 my-1 col-span-2">
                                            <div className="bg-progress-bar h-5 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                        <p className='self-end font-medium'>50% full</p>
                                    </div>
                                    <h2 className="text-xl font-semibold">{location.name}</h2>
                                </div>
                                <div className='justify-items-end self-end'><FiHeart size={24}/></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseLocations;