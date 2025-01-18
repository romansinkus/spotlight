import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const TopNav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-8">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/screens/browselocations" className="text-gray-300 hover:text-white">
                        Browse
                    </Link>
                </div>
                <div className="flex-grow mx-4 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-1/3 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                    />
                </div>
                <div className="text-gray-300 hover:text-white">
                    <FaUserCircle size={24} />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;