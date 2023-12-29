import Link from 'next/link';

import { FaFacebook, FaInstagram } from 'react-icons/fa6';

import { poppins } from '@/app/fonts';

export const Footer = () => {
    return (
        <footer className="grid grid-flow-row-dense gap-x-4 gap-y-6 text-sm place-items-center items-center p-10 bg-primary text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link href="/about" className="link link-hover">
                    <span
                        className={`text-white text-[15px] font-medium ${poppins.className}`}
                    >
                        About
                    </span>
                </Link>
                <Link href="/contact" className="link link-hover">
                    <span
                        className={`text-white text-[15px] font-medium ${poppins.className}`}
                    >
                        Contact
                    </span>
                </Link>
                <Link href="/rooms" className="link link-hover">
                    <span
                        className={`text-white text-[15px] font-medium ${poppins.className}`}
                    >
                        Rooms
                    </span>
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link href="#">
                        <FaFacebook className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="#">
                        <FaInstagram className="w-6 h-6 text-white" />
                    </Link>
                </div>
            </nav>
            <aside>
                <p
                    className={`text-white text-[15px] font-medium ${poppins.className}`}
                >
                    Copyright © 2023 - All right reserved by 3R Residency
                </p>
            </aside>
        </footer>
    );
};
