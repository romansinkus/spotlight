import Image from "next/image";
import Layout from './layout';
import WelcomeSection from "./components/welcomesection";
import LocationCard from "./components/locationcard";

export default function Home() {
  const locations = [
    { id: 1, name: 'Blue Chip', src: '/images/BlueChip.jpg', progress: '70%' },
    { id: 2, name: 'The Nest', src: '/images/Nest.jpg', progress: '50%' },
    { id: 3, name: 'Woodward Library', src: '/images/Woodward.jpg', progress: '90%' },
    { id: 4, name: 'Koerner Library', src: '/images/Koerner.jpg', progress: '15%' },
  ];

  return (
    <div className="min-h-screen pb-20 sm:p-10 sm:px-20 font-[family-name:var(--font-geist-sans)] bg-background">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <WelcomeSection />

        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="flex-2 text-4xl font-bold self-start bg-gray-800 text-white p-8 rounded-lg w-2/3">
            <img src='/images/IKB.jpg' alt='IKB' className="w-full h-100 object-cover rounded-md" />
          </div>
          <div className="flex-1 bg-white text-black p-10 rounded-3xl w-1/3">
            <h2 className="text-2xl font-bold mb-4">Recommended</h2>
            <div className="flex flex-col gap-4">
              {locations.map(location => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}