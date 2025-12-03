import { raleway } from '../fonts';

export default function Contact() {
    return (
        <>
            <div className="h-[700px]  bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-neutral-500/50">
                    <div className="h-[700px] mx-auto  max-w-2xl  p-6 lg:px-8 py-32 sm:py-48 lg:py-56 flex items-center justify-center">
                        <div className="text-center">
                            <h1
                                className={`text-5xl  font-bold tracking-tight text-white ${raleway.className}`}
                            >
                                Contact us
                            </h1>
                            <p
                                className={`mt-6 text-lg leading-8 text-white ${raleway.className}`}
                            >
                                Let&apos;s connect! Reach out to Silent Spruce
                                Retreat for a stay to remember.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-(--breakpoint-md)">
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="Name"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Fullname
                            </label>
                            <input
                                type="name"
                                id="name"
                                className="shadow-xs bg-white border border-secondary-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                placeholder="Fullname"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-xs bg-white border border-secondary-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="shadow-xs bg-white border border-secondary-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="shadow-xs bg-white border border-secondary-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-hidden focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
            <div className="w-full h-96 bg-neutral-100 flex flex-col items-center justify-center text-center px-6">
                <h2
                    className={`text-2xl font-semibold text-secondary ${raleway.className}`}
                >
                    Location Reveal Coming Soon
                </h2>
                <p className="mt-4 text-secondary text-sm max-w-2xl">
                    We&apos;re finalizing the guest arrival experience for
                    Silent Spruce Retreat. A private map and arrival guide will
                    be shared directly with confirmed guests to preserve the
                    intimate atmosphere of the property.
                </p>
            </div>
        </>
    );
}
