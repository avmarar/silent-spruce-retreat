'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaBars, FaX } from 'react-icons/fa6';

import { Dialog, DialogPanel } from '@headlessui/react';

import { poppins } from '@/app/fonts';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    return (
        <header className="bg-neutral-50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Silent Spruce Retreat</span>
                        <Image
                            src="/silent-spruce-retreat-logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-auto w-auto max-h-[100px] max-w-[100px]"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
                        onClick={() => setMobileMenuOpen(true)}
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
                        onClick={() => router.push('/booking')}
                    >
                        <span
                            className={`text-white text-[15px] font-medium ${poppins.className}`}
                        >
                            Book now
                        </span>
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end   ">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaX className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href={'/'}
                                    className={`text-primary ${poppins.className} font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-primary hover:text-white`}
                                >
                                    Home
                                </Link>

                                <Link
                                    href={'/explore'}
                                    className={`text-primary ${poppins.className} font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-primary hover:text-white`}
                                >
                                    Explore
                                </Link>

                                <Link
                                    href={'/rooms'}
                                    className={`text-primary ${poppins.className} font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-primary hover:text-white`}
                                >
                                    Rooms
                                </Link>

                                <Link
                                    href={'/about'}
                                    className={`text-primary ${poppins.className} font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-primary hover:text-white`}
                                >
                                    About
                                </Link>

                                <Link
                                    href={'/contact'}
                                    className={`text-primary ${poppins.className} font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-primary hover:text-white`}
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="py-6">
                                <button
                                    className="bg-primary rounded-[5px] w-[120px] h-[55px]"
                                    onClick={() => router.push('/booking')}
                                >
                                    <span
                                        className={`text-white text-[15px] font-medium ${poppins.className}`}
                                    >
                                        Book now
                                    </span>
                                </button>
                                {/* <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a> */}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};
