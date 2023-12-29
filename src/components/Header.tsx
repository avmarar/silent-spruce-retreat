'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaBars } from 'react-icons/fa6';

import { poppins } from '@/app/fonts';

export const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-neutral-50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            src="/3r-high-resolution-logo-transparent.png"
                            alt="logo"
                            width={75}
                            height={75}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
                    >
                        <span className="sr-only">Open main menu</span>
                        <FaBars
                            aria-hidden="true"
                            style={{ width: '36px', height: '36px' }}
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <ul className="lg:flex items-center gap-x-[60px] gap-y-2 flex-wrap lg:col-span-2 hidden">
                        <li>
                            <Link href={'/'}>
                                <div
                                    className={`text-primary ${poppins.className} font-bold text-[15px] `}
                                >
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/explore'}>
                                <div
                                    className={`text-primary ${poppins.className} font-bold text-[15px] `}
                                >
                                    Explore
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/rooms'}>
                                <div
                                    className={`text-primary ${poppins.className} font-bold text-[15px] `}
                                >
                                    Rooms
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <div
                                    className={`text-primary ${poppins.className} font-bold text-[15px] `}
                                >
                                    About
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>
                                <div
                                    className={`text-primary ${poppins.className} font-bold text-[15px] `}
                                >
                                    Contact
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        className="bg-primary rounded-[5px] w-[165px] h-[55px]"
                        onClick={() =>
                            router.push(
                                'https://www.booking.com/hotel/in/3r-residency-munnar-munnar.html',
                            )
                        }
                    >
                        <span
                            className={`text-white text-[15px] font-medium ${poppins.className}`}
                        >
                            Book now
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};
