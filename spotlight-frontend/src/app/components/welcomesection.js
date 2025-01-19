import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import TypingEffect from './typingeffect';

const WelcomeSection = () => {
    const [typingComplete, setTypingComplete] = useState(false);

    return (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center bg-welcome-colour rounded-xl p-8">
            <div className="flex flex-col items-start flex-grow">
                <h1 className="text-4xl font-bold text-black p-4">
                    <TypingEffect text="Hello NWHacks. Welcome to Spotlight!" delay={100} onComplete={() => setTypingComplete(true)} />
                </h1>
                {typingComplete && (
                    <h2 className="text-lg text-black p-4 pt-0">
                        Let us help you navigate your daily adventures.
                    </h2>
                )}
            </div>
            <div className="p-16 rounded-lg sm:p-0 sm:ml-4 mr-4">
                <button className="bg-black text-white py-4 px-8 text-lg rounded-full hover:bg-blue-600">
                    Find your next study spot
                    <FaArrowRight className="inline ml-2" />
                </button>
            </div>
        </div>
    );
};

export default WelcomeSection;