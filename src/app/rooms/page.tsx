import Image from 'next/image';

import { FaBath, FaKitchenSet, FaTent, FaWifi } from 'react-icons/fa6';
import { GiBunkBeds } from 'react-icons/gi';
import {
    MdBalcony,
    MdKingBed,
    MdOutlineSmokeFree,
    MdSingleBed,
} from 'react-icons/md';
import { PiTelevision } from 'react-icons/pi';

import { poppins, raleway } from '../fonts';

export default function Rooms() {
    return (
        <>
            <div className="h-[700px] bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-stone-500 bg-opacity-50">
                    <div className="h-[700px] mx-auto  max-w-2xl  p-6 lg:px-8 py-32 sm:py-48 lg:py-56 flex items-center justify-center ">
                        <div className="text-center">
                            <h1
                                className={`text-5xl  font-bold tracking-tight text-white ${raleway.className}`}
                            >
                                Rooms
                            </h1>
                            <p
                                className={`mt-6 text-lg leading-8 text-white ${raleway.className}`}
                            >
                                Discover Your Ideal Retreat: Explore Our Range
                                of Comfortable and Thoughtfully Designed Room
                                Types at 3R Residency Munnar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full bg-white-50 flex flex-col items-center p-16 lg:px-[119px]">
                <div className="w-auto h-auto flex justify-evenly lg:flex-row md:max-lg:flex-col items-center gap-6 flex-wrap">
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl ">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Social Nest Hub
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Join the fun and comfort in our vibrant 6-bed
                                dormitory room, where camaraderie meets cozy
                                stays.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <MdBalcony className="w-6 h-6" />
                                <FaBath className="w-6 h-6" />
                                <FaKitchenSet className="w-6 h-6" />
                                <MdOutlineSmokeFree className="w-6 h-6" />
                                <GiBunkBeds className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Mix & Connect Bunk
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Connect and unwind in our lively mixed-gender
                                6-bed dormitory, a vibrant space designed for
                                shared experiences.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <MdBalcony className="w-6 h-6" />
                                <FaBath className="w-6 h-6" />
                                <FaKitchenSet className="w-6 h-6" />
                                <MdOutlineSmokeFree className="w-6 h-6" />
                                <GiBunkBeds className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Gents&apos; Chill Zone
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Find exclusive comfort in our male-only bunk
                                space within the 6-bed dormitory, designed for
                                ultimate relaxation.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <MdBalcony className="w-6 h-6" />
                                <FaBath className="w-6 h-6" />
                                <FaKitchenSet className="w-6 h-6" />
                                <MdOutlineSmokeFree className="w-6 h-6" />
                                <GiBunkBeds className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto h-auto flex justify-evenly lg:flex-row md:max-lg:flex-col  pt-12 items-center gap-6 flex-wrap">
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl ">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Scenic Serenity Suite
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Relish luxury and breathtaking views in our
                                Deluxe Double Room, complete with a private
                                balcony for a dreamy escape.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <MdBalcony className="w-6 h-6" />
                                <FaBath className="w-6 h-6" />
                                <MdOutlineSmokeFree className="w-6 h-6" />
                                <PiTelevision className="w-6 h-6" />
                                <MdKingBed className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Nature&apos;s Cozy Retreat
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Immerse yourself in nature&apos;s embrace with
                                our cozy tent accommodation, offering a serene
                                escape under the stars.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <FaTent className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-2xl w-96 bg-base-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Rooms.png"
                                alt="Rooms"
                                width={380}
                                height={240}
                            />
                        </figure>
                        <div className="flex flex-auto flex-col gap-2 p-8">
                            <h2
                                className={`flex items-center gap-2 text-xl font-semibold text-primary ${raleway.className}`}
                            >
                                Tranquil Villa Haven
                            </h2>
                            <p
                                className={`text-secondary text-[15px] font-medium ${poppins.className}`}
                            >
                                Discover tranquility in our charming Standard
                                Villa, providing a perfect blend of comfort and
                                relaxed elegance.
                            </p>
                            <hr />
                            <div className="flex flex-wrap justify-evenly items-start gap-2 py-2">
                                <FaWifi className="w-6 h-6" />
                                <MdBalcony className="w-6 h-6" />
                                <FaBath className="w-6 h-6" />
                                <FaKitchenSet className="w-6 h-6" />
                                <MdOutlineSmokeFree className="w-6 h-6" />
                                <MdKingBed className="w-6 h-6" />
                                <MdSingleBed className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
