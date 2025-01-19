import React from 'react';
import Layout from '../../layout';
import Link from 'next/link';

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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Browse Locations On Campus</h1>
            <div className="flex gap-4 mb-4">
                <button className="bg-gray-800 text-white py-2 px-4 rounded-full w-32">All</button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-full w-32">Libraries</button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-full w-32">Gym</button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-full w-32">Food</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map(location => (
                    <div key={location.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link href='/screens/IKBLive'>
                            <img
                                src={location.image}
                                alt={location.name}
                                className="w-full h-64 object-cover cursor-pointer"
                            />
                        </Link>                            <div className="p-4">
                            <h2 className="text-xl font-semibold">{location.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseLocations;