import {Link} from "react-router-dom";

export const HeroSection = () => {
    return (
        <main className="lg:relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block xl:inline">Empowering your</span>{' '}
                        <span className="block text-[#4f81a9] xl:inline">digital transformation</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Encapsulates the promise of leveraging cutting-edge solutions to revolutionize operations,
                        enhance efficiency, and propel growth in the digital age.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link
                                to={"/services"}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#9bc9ef] px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg hover:bg-[#4f81a9] backdrop-contrast-150 transition-colors"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <Link
                                to={"/"}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#4f81a9] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                            >
                                Live demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                />
            </div>
        </main>
    )
}
