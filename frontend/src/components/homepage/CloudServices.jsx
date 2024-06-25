import {CheckIcon} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Container Services',
        description: 'Optimize your application deployment with efficient container management and orchestration.',
    },
    {
        name: 'Networking Services',
        description: 'Enhance your network infrastructure with reliable and scalable networking solutions.',
    },
    {
        name: 'Security and Compliance Services',
        description: 'Ensure robust security measures and regulatory compliance to protect your data and operations.',
    },
    {
        name: 'Database as a Service (DBaaS)',
        description: 'Effortlessly manage and scale your databases in the cloud for optimal performance and reliability.',
    },
    {
        name: 'Big Data Analytics',
        description: 'Gain valuable insights from your data with advanced analytics capabilities and scalable data processing.',
    },
    {
        name: 'Data Storage and Backup Services',
        description: 'Securely store and protect your data while ensuring seamless backup and recovery processes.',
    },
    {
        name: 'Software as a Service (SaaS)',
        description: 'Access powerful software applications over the internet to streamline your business operations.',
    },
    {
        name: 'Platform as a Service (PaaS)',
        description: 'Accelerate your application development and deployment with a comprehensive platform.',
    },
];

export const CloudServices = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Cloud Services</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Our cloud services encompass a range of offerings including Infrastructure as a Service (IaaS)
                        for flexible computing resources, Platform as a Service (PaaS) for streamlined application
                        development, and Software as a Service (SaaS) delivering accessible business applications,
                        ensuring tailored solutions to meet diverse client needs.
                    </p>
                </div>
                <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                            <dt>
                                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true"/>
                                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
