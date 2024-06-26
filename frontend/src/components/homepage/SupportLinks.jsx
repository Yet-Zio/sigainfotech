import {LifebuoyIcon, NewspaperIcon, PhoneIcon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";

const supportLinks = [
    {
        name: 'Sales',
        href: '/contact',
        description:
            'Our sales team is a dynamic group of professionals dedicated to driving growth and delivering exceptional service.',
        icon: PhoneIcon,
    },
    {
        name: 'Technical Support',
        href: '/contact',
        description:
            'Our technical support team is a highly skilled and responsive group committed to providing top-notch assistance. ',
        icon: LifebuoyIcon,
    },
    {
        name: 'Media Inquiries',
        href: '/contact',
        description:
            'We handle media inquiries with a focus on providing timely and accurate information.',
        icon: NewspaperIcon,
    },
]
export const SupportLinks = () => {
    return (
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
                <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div
                            className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#9bc9ef] p-5 shadow-lg">
                            <link.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                        <p className="mt-4 text-base text-gray-500">{link.description}</p>
                    </div>
                    <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                        <Link to={link.href}
                           className="text-base font-medium text-[#9bc9ef] hover:text-[#9bc9ef]/75">
                            Contact us<span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
