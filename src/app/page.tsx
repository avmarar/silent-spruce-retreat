'use client';

import { useRouter } from 'next/navigation';

import { Facilities } from '@/components/Facilities';
import { Testimonials } from '@/components/Testimonials';

import { poppins, raleway } from './fonts';

export default function Home() {
    const router = useRouter();
    return (
        <>
            <div className="h-[700px]  bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-stone-500/50">
                    <div className="h-[700px] mx-auto  max-w-2xl  p-6 lg:px-8 py-32 sm:py-48 lg:py-56 flex items-center justify-center">
                        <div className="text-center">
                            <h1
                                className={`text-5xl  font-bold tracking-tight text-white ${raleway.className}`}
                            >
                                Experience Serene Bliss at Silent Spruce Retreat
                            </h1>
                            <p
                                className={`mt-6 text-lg leading-8 text-white ${raleway.className}`}
                            >
                                Indulge in tranquility at our boutique homestay,
                                curated for calm escapes and elevated comfort.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    className="border border-white rounded-[5px] w-[165px] h-[55px]"
                                    onClick={() => router.push('/booking')}
                                >
                                    <span
                                        className={`text-white text-[15px] font-medium ${poppins.className}`}
                                    >
                                        Book now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Facilities />
            <hr />
            <Testimonials />
        </>
    );
}
