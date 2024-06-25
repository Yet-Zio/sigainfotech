import React, {useState} from 'react'
import Services from "../components/Services"
import Partners from "../components/Partners"
import {Link} from 'react-router-dom'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import {AnimatePresence, motion} from "framer-motion"
import {NavigationBar} from '../components/shared/header/NavigationBar'
import {Footer} from "../components/shared/Footer.jsx";

export default function ServicesProvided() {

    const [weDoState, setweDoState] = useState("Services")
    const [showDrop, setShowDrop] = useState(false)
    return (
        <><NavigationBar/>
            <section className='h-screen'>
                <div
                    className="hidden md:flex w-full h-12 bg-[#74acda] sticky top-0 left-0 z-10 justify-between ps-20 pe-20">
                    <Link to="#" className='text-white font-sans font-semibold self-center'
                          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>What we do</Link>
                    <div className="flex text-white font-sans text-xl">
                        <span
                            className={`${weDoState === "Services" ? "bg-[#92c1e7]" : ""} h-12 pt-2 ps-5 pe-5 hover:cursor-pointer hover:bg-[#9bc9ef]`}
                            onClick={() => {
                                setweDoState("Services");
                                window.scrollTo({top: 0, behavior: 'smooth'})
                            }}>Services</span>
                        <span
                            className={`${weDoState === "Partners" ? "bg-[#92c1e7]" : ""} h-12 pt-2 ps-5 pe-5 hover:cursor-pointer hover:bg-[#9bc9ef]`}
                            onClick={() => {
                                setweDoState("Partners");
                                window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
                            }}>Partners</span>
                    </div>
                </div>
                <AnimatePresence>
                    <div className={`flex flex-col md:hidden sticky w-full top-0 left-0 z-10`}>
                        <div className="flex w-full h-12 bg-[#74acda] ps-10 pe-3 justify-between">
                            <Link to="#" className='text-white font-sans font-semibold self-center'
                                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>What we do</Link>
                            <motion.div className="flex" onClick={() => setShowDrop(!showDrop)}
                                        animate={{rotate: showDrop ? 180 : 0}}
                                        transition={{duration: 0.2}}>
                                <ChevronDownIcon className='size-6 mt-3 text-white hover:text-gray-200 cursor-pointer'/>
                            </motion.div>
                        </div>
                        <motion.div
                            className={`${showDrop ? "flex flex-col z-10" : "hidden"} w-full bg-[#5584ab] h-22 p-3 text-white`}>
                            <span className={`mb-3 ${weDoState === "Services" ? "font-bold" : ""} cursor-pointer`}
                                  onClick={() => {
                                      setweDoState("Services");
                                      window.scrollTo({top: 0, behavior: 'smooth'})
                                  }}>Services</span>
                            <span className={`mb-3 ${weDoState === "Partners" ? "font-bold" : ""} cursor-pointer`}
                                  onClick={() => {
                                      setweDoState("Partners");
                                      window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
                                  }}>Partners</span>
                        </motion.div>
                    </div>
                </AnimatePresence>
                <Services/>
                <Partners/>
                <Footer/>
            </section>
        </>
    )
}
