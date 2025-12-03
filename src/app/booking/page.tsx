import Link from 'next/link';

import { poppins, raleway } from '../fonts';

export default function Booking() {
    return (
        <section className="min-h-[600px] bg-neutral-50 flex flex-col items-center justify-center px-6 py-16 text-center">
            <h1
                className={`text-5xl font-bold tracking-tight text-primary ${raleway.className}`}
            >
                Booking Portal (Preview)
            </h1>
            <p
                className={`mt-6 max-w-2xl text-base text-secondary leading-7 ${poppins.className}`}
            >
                We&apos;re crafting a seamless booking flow for Silent Spruce
                Retreat, including secure payments and instant confirmations.
                Until the payment gateway is live, reach out via the contact
                page to reserve your stay or request curated itineraries.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/contact"
                    className="bg-primary text-white rounded-lg px-6 py-3 text-sm font-semibold"
                >
                    Contact Us
                </Link>
                <button
                    type="button"
                    className="border border-primary text-primary rounded-lg px-6 py-3 text-sm font-semibold cursor-not-allowed"
                    disabled
                >
                    Payment Gateway Coming Soon
                </button>
            </div>
        </section>
    );
}
