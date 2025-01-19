import React from 'react';

const HourlyUpdates = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = '8:00 AM - 10:00 PM';

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Popular Times</h2>
            <div className="flex flex-col space-y-4">
                {days.map((day, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-2/6 text-lg font-semibold">{day}</div>
                        <div className="w-4/6 bg-gray-200 rounded-full h-4">
                            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-lg font-semibold">
                Library Hours: {hours}
            </div>
        </div>
    );
};

export default HourlyUpdates;