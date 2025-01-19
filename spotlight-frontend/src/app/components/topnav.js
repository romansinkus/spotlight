import { FaUserCircle, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const TopNav = () => {
    return (
        <nav className="bg-background p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-10">
                    <img src="/images/spotlightLogo.png" alt="Spotlight Logo" className="w-10 h-10" />
                    <h1 className="text-lg font-bold text-black hover:text-white">Spotlight</h1>
                    <Link href="/" className="text-lg font-bold text-black hover:text-white">
                        Home
                    </Link>
                    <Link href="/screens/browselocations" className="text-lg font-bold text-black hover:text-white">
                        Browse
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-2/3 p-2 px-8 bg-white text-black placeholder-gray-400 rounded-full"
                    />
                    <button className="p-2 bg-gray-700 rounded-md text-white hover:bg-gray-600">
                        <FaSearch size={20} />
                    </button>
                    <div className="text-black hover:text-white">
                        <FaUserCircle size={28} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;