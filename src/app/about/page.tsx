import { poppins, raleway } from '../fonts';

export default function About() {
    return (
        <>
            <div className="h-[700px]  bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-neutral-500/50">
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
                                Discover Silent Spruce Retreat, a tranquil
                                haven surrounded by whispering evergreens and
                                curated for slow, restorative getaways.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full bg-white-50 flex flex-col items-start p-16 lg:px-[119px] ">
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pt-6`}
                >
                    Welcome to Silent Spruce Retreat, a serene haven crafted
                    for travelers who crave cozy interiors, attentive hosts, and
                    timeless natural backdrops. Every suite pairs organic
                    textures with modern comforts so unplugging feels effortless.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} py-6`}
                >
                    Our team delights in slow hospitality—freshly brewed teas at
                    sunrise, personalized itineraries, and thoughtful touches
                    that make each stay feel tailor-made. Whether guests are
                    planning creative residencies or intimate reunions, the
                    retreat adapts to every pace.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pb-6`}
                >
                    The surrounding evergreen canopy inspires mindful walks,
                    open-air yoga, and stargazing sessions by the communal fire
                    pit. Indoors, shared lounges, reading nooks, and chef-ready
                    kitchens encourage connection without sacrificing privacy.
                </p>
                <p
                    className={`text-secondary text-[15px] font-medium ${poppins.className} pb-6`}
                >
                    Silent Spruce Retreat is continually evolving, blending
                    cabin warmth with boutique polish. We invite you to slow
                    down, breathe deeply, and let the hush of the trees set the
                    tone for your stay.
                </p>
            </div>
        </>
    );
}
