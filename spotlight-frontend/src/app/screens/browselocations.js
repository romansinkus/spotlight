import React from 'react';

const locations = [
    { id: 1, name: 'Irving K Barber Library', image: '/images/location1.jpg' },
    { id: 2, name: 'Koerners Library', image: '/images/location2.jpg' },
    { id: 3, name: 'Woodward Library', image: '/images/location3.jpg' },
    { id: 4, name: 'The Nest', image: '/images/location4.jpg' },
    { id: 5, name: 'BirdCoop', image: '/images/location5.jpg' },
    { id: 6, name: 'Location 6', image: '/images/location6.jpg' },
];

const BrowseLocations = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Browse Locations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map(location => (
                    <div key={location.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={location.image} alt={location.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{location.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseLocations;