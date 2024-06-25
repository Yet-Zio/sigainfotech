import {AutomationCards} from "./AutomationCards.jsx";

export const Automation = () => {
    return (
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"/>
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Automations</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Specializing in automating services to streamline operations, enhance efficiency, and drive
                        business growth.
                    </p>
                </div>
                <AutomationCards/>
            </div>
        </div>
    )
}
