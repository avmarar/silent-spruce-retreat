import { poppins, raleway } from '../fonts';

export default function About() {
    return (
        <>
            <div className="h-[700px]  bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-neutral-500 bg-opacity-50">
                    <div className="h-[700px] mx-auto  max-w-2xl  p-6 lg:px-8 py-32 sm:py-48 lg:py-56 flex items-center justify-center">
                        <div className="text-center">
                            <h1
                                className={`text-5xl  font-bold tracking-tight text-white ${raleway.className}`}
                            >
                                About us
                            </h1>
                            <p
                                className={`mt-6 text-lg leading-8 text-white ${raleway.className}`}
                            >
                                Discover 3R Residency, a tranquil haven in
                                scenic Kerala, offering comfortable
                                accommodations amidst lush landscapes. Located
                                near Munnar&apos;s iconic attractions, it&apos;s
                                the perfect gateway to explore nature&apos;s
                                beauty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full bg-white-50 flex flex-col items-start p-16 lg:px-[119px] ">
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pt-6`}
                >
                    Welcome to 3R Residency Munnar, a serene haven nestled in
                    the picturesque landscapes of Munnar, a captivating hill
                    station in the Idukki district of Kerala, India. Located
                    merely 8.8 miles from the renowned Munnar Tea Museum and 14
                    miles from the majestic Mattupetty Dam, our accommodations
                    offer a unique homestay experience that combines comfort,
                    hospitality, and the breathtaking beauty of nature.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} py-6`}
                >
                    At 3R Residency, our aim is to provide guests with a
                    memorable and authentic stay, surrounded by lush greenery
                    and tranquility. Our dedicated team ensures that every guest
                    feels at home, experiencing the genuine warmth of
                    Kerala&apos;s renowned hospitality.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pb-6`}
                >
                    Conveniently situated approximately 18 miles from Anamudi
                    Peak, 19 miles from Cheeyappara Waterfalls, and 20 miles
                    from Eravikulam National Park, our residence invites
                    exploration of the wonders of this region. Lakkam
                    Waterfalls, situated 23 miles away, and the distant allure
                    of Top Station at 29 miles, offer unforgettable excursions.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pb-6`}
                >
                    For travelers, the Cochin International Airport, a key
                    transportation hub, is located 57 miles from our doorstep,
                    providing convenient access to our tranquil retreat in the
                    heart of Munnar. Discover comfort, hospitality, and the
                    untouched beauty of Kerala at 3R Residency Munnar.
                </p>
            </div>
        </>
    );
}
