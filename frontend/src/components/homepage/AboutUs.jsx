import {SupportLinks} from "./SupportLinks.jsx";

export const AboutUs = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="relative bg-gray-800 pb-32">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"/>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras
                        aliquet purus dui
                        laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
               <SupportLinks/>
            </section>
        </div>
    )
}