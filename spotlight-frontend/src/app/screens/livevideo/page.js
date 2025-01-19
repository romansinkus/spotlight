import Image from "next/image";
import Layout from './layout';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const IKBLive = () => {
    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center sm:items-start">
                <h1 className="text-4xl font-bold self-start bg-gray-800 text-white p-4 rounded-lg">
                    Irving K. Barber Library
                </h1>
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex-2 text-4xl font-bold self-start bg-gray-800 text-white p-8 rounded-lg  w-2/3">
                        <img src='/images/IKB.jpg' alt='IKB' className="w-full h-100 object-cover rounded-md" />
                    </div>
                    <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Recommended Study Spots</h2>
                        <div className="flex flex-col gap-4">
                            {[
                                { id: 1, name: 'Blue Chip', src: '/images/BlueChip.jpg' },
                                { id: 2, name: 'The Nest', src: '/images/Nest.jpg' },
                                { id: 3, name: 'Woodward Library', src: '/images/Woodward.jpg' },
                                { id: 4, name: 'Koerner Library', src: '/images/Koerner.jpg' },
                            ].map(image => (
                                <div key={image.id} className="flex items-center gap-4">
                                    <img src={image.src} alt={image.name} className="w-24 h-24 object-cover rounded" />
                                    <div className="flex-grow">
                                        <div className="text-lg font-semibold">{image.name}</div>
                                        <div className="bg-gray-700 rounded-full h-1 mt-1">
                                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                        <div className="flex flex-row gap-4 mt-2 items-center">
                                            <div className="text-sm text-gray-400 mt-1">Space Available</div>
                                            <IoIosCheckmarkCircleOutline size={24} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default IKBLive;