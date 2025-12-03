import { raleway } from '../fonts';

export default function Contact() {
    return (
        <>
            <div className="h-[700px]  bg-[url('/RoomLarge.png')] bg-cover">
                <div className="h-[700px] bg-neutral-500 bg-opacity-50">
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
                                Let&apos;s Connect! Reach out to 3R Residency
                                for a Stay to Remember.
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
            <div className="w-full h-96">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.234827557135!2d77.03185934594198!3d10.019936834034464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07986c9ea757bf%3A0x399afa491752815!2s3R%20Residency!5e1!3m2!1sen!2sau!4v1703817831467!5m2!1sen!2sau"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}
