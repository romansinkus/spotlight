import { FaUserCircle, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const TopNav = () => {
    return (
        <nav className="bg-background p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-10">
                    <h1 className="text-lg font-bold text-black hover:text-white">Spotlight</h1>
                    <Link href="/" className="text-lg font-bold text-black hover:text-white">
                        Home
                    </Link>
                    <Link href="/screens/browselocations" className="text-lg font-bold text-black hover:text-white">
                        Browse
                    </Link>
                </div>
                <div className="flex-grow mx-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-2/3 p-3 rounded-md bg-white text-black placeholder-gray-400"
                    />
                    <button className="ml-2 p-2 bg-gray-700 rounded-md text-white hover:bg-gray-600">
                        <FaSearch size={20} />
                    </button>                </div>
                <div className="text-black hover:text-white">
                    <FaUserCircle size={28} />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;