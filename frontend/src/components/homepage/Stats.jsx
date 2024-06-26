import {Metrics} from "./Metrics.jsx";

export const Stats = () => {
    return (
        <div className="bg-gray-50 pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Operational Metrics
                    </h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                        Explore our operational metrics that showcase our commitment to excellence and client
                        satisfaction.
                    </p>
                </div>
            </div>
            <div className="mt-10 bg-white pb-12 sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-gray-50"/>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <Metrics/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
