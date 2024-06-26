import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    FaceSmileIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import {useNavigate} from "react-router-dom"

const features = [
    {
        name: 'Automation',
        description: 'Boost efficiency and accuracy with our comprehensive automation services, designed to streamline operations and reduce manual effort.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Enhance your protection with our advanced security services, offering robust solutions to safeguard your data and systems.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Cloud Services',
        description: 'Elevate your business with our cloud services, providing scalable and flexible solutions for all your computing needs.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Powerful API',
        description: 'Integrate seamlessly with our API services, enabling smooth connectivity and enhanced functionality across your applications.',
        icon: CogIcon,
    },
    {
        name: 'Other Services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iure autem? Illum iste nobis quibusdam dolorem',
        icon: FaceSmileIcon,
    },
    {
        name: 'Other Services 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iure autem? Illum iste nobis quibusdam dolorem',
        icon: ServerIcon,
    },
]

export default function Services() {

    const navigate = useNavigate()

    return (
        <div className="relative bg-white py-16 sm:py-10 lg:py-3">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                {/* <h2 className="text-sm font-semibold text-[#9bc9ef]">Optimize your operations</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Services
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    Explore our wide range of innovative services designed to drive your business forward, including
                    automation, advanced security, and cutting-edge cloud solutions.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-[#9bc9ef] p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                        </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-10 justify-center items-center">
                        <button
                            className='bg-[#9bc9ef] p-3 ps-7 pe-7 rounded-full text-white font-sans hover:bg-[#9bc9ef]/75'
                            onClick={() => navigate("/contact")}>Find out more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  