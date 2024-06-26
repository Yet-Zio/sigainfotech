import {EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline'

export default function ContactForm() {
    return (
        <div className="bg-[#5189b8]">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-100 sm:text-3xl sm:tracking-tight">Sales
                            Support</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-200">
                                Our dedicated sales support team is here to assist you with any questions or concerns
                                you might have. Whether you're looking for more information about our products, need
                                help with an order, or want to discuss a potential partnership, we're ready to provide
                                the support you need.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-200" aria-hidden="true"/>
                                </div>
                                <div className="ml-3 text-base text-gray-200">
                                    <p>+1 (555) 123 4567</p>
                                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-200" aria-hidden="true"/>
                                </div>
                                <div className="ml-3 text-base text-gray-200">
                                    <p>support@sigainfotech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-100 sm:text-3xl sm:tracking-tight">Technical
                            Support</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-200">
                                Our technical support team is dedicated to providing you with the assistance you need to
                                ensure your experience with our products and services is seamless. Whether you're
                                encountering technical issues, need troubleshooting guidance, or have questions about
                                our technology, we're here to help.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-200" aria-hidden="true"/>
                                </div>
                                <div className="ml-3 text-base text-gray-200">
                                    <p>+1 (555) 123 4567</p>
                                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-200" aria-hidden="true"/>
                                </div>
                                <div className="ml-3 text-base text-gray-200">
                                    <p>support@sigainfotech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
