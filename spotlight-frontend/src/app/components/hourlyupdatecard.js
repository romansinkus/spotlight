import React from 'react';

const HourlyUpdates = () => {
    const times = ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];
    const hours = '8:00 AM - 10:00 PM';

    // Function to generate values following a normal distribution
    const generateNormalDistribution = (mean, stdDev, size) => {
        const values = [];
        for (let i = 0; i < size; i++) {
            let u = 0, v = 0;
            while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
            while (v === 0) v = Math.random();
            let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
            num = num * stdDev + mean; // Adjusting to mean and stdDev
            values.push(Math.max(0, Math.min(100, num))); // Clamping to [0, 100]
        }
        return values;
    };

    const barWidths = generateNormalDistribution(50, 15, times.length);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Popular Times Today</h2>
            <div className="flex flex-col space-y-4">
                {times.map((time, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="w-1/6 text-lg font-semibold">{time}</div>
                        <div className="w-5/6 bg-gray-200 rounded-full h-4">
                            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${barWidths[index]}%` }}></div>
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