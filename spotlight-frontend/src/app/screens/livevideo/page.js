import HourlyUpdates from "@/app/components/hourlyupdatecard";

const IKBLive = () => {
    return (
        <div className="min-h-screen p-0 px-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-4 items-center sm:items-start w-full">
                <h1 className="text-4xl font-bold self-start  text-black p-4 w-full">
                    Irving K. Barber Library
                </h1>
                <div className="flex gap-4 mb-4 w-full">
                    <button className="bg-select-colour text-black py-2 px-4 rounded-full w-64">Riddington Room</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Musqueam Reading Room</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Peace River Classroom</button>
                    <button className="bg-white text-black py-2 px-4 rounded-full w-64">Ike's Cafe</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex-2 text-4xl font-bold self-start bg-gray-800 text-white p-8 rounded-lg w-full sm:w-2/3">
                        <img src='/images/IKB.jpg' alt='IKB' className="w-full h-100 object-cover rounded-md" />
                    </div>
                    <div className="flex flex-col gap-8 w-full sm:w-1/3">
                        <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg">
                            <HourlyUpdates />
                        </div>
                        <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg">
                            <HourlyUpdates />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default IKBLive;