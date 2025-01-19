import React from 'react';

const VerticalHours = () => {
    const times = ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];
    const days = [
        { day: 'Mon', isSelected: false },
        { day: 'Tue', isSelected: false },
        { day: 'Wed', isSelected: false },
        { day: 'Thu', isSelected: false },
        { day: 'Fri', isSelected: false },
        { day: 'Sat', isSelected: false },
        { day: 'Sun', isSelected: true },
    ];

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
        <div className="bg-white p-2 rounded-lg">
            <div className="flex justify-between items-center mt-4 mb-2 ">
                {days.map(({ day, isSelected }) => (
                    <button
                        key={day}
                        className={`py-1 px-2 rounded-full h-8 w-16 ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>
            <div className="flex flex-col space-y-4">
                {times.map((time, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="w-1/6 text-md font-semibold">{time}</div>
                        <div className="w-5/6 bg-gray-200 rounded-full h-2">
                            <div className="bg-progress-bar h-2 rounded-full" style={{ width: `${barWidths[index]}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalHours;