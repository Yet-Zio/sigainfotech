import sigaInfotech from "../../assets/sigabrand_transparent.png"
import {Solutions} from "./footer/Solutions.jsx";
import {Support} from "./footer/Support.jsx";
import {Socials} from "./footer/Socials.jsx";
import {Company} from "./footer/Company.jsx";
import {Legal} from "./footer/Legal.jsx";
import {Link} from "react-router-dom";

// Fixing issue
export const Footer = () => {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link to={"/"}>
                            <img
                                className="h-10"
                                src={sigaInfotech}
                                alt="Company name"
                            />
                        </Link>
                        <p className="text-base text-gray-500">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                       <Socials/>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <Solutions/>
                            <Support/>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <Company/>
                            <Legal/>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2024 Your Company, Inc. All rights
                        reserved.</p>
                </div>
            </div>
        </footer>
    )
}
