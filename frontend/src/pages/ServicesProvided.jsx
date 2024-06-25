import React, { useState } from 'react'
import Services from "../components/Services"
import { Link } from 'react-router-dom'

export default function ServicesProvided() {

  const [weDoState, setweDoState] = useState("Services")
  return (
    <section className='h-screen'>
      <div className="flex w-full h-12 bg-[#74acda] sticky top-0 left-0 z-10 justify-between ps-20 pe-20">
        <Link to="#" className='text-white font-sans font-semibold self-center' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>What we do</Link>
        <div className="flex text-white font-sans text-xl">
          <span className={`${weDoState === "Services" ? "bg-[#9bc9ef]" : ""} h-12 pt-2 ps-2 pe-2 hover:cursor-pointer hover:bg-[#9bc9ef]`} onClick={() => setweDoState("Services")}>Services</span>
          <span className={`${weDoState === "Partners" ? "bg-[#9bc9ef]" : ""} h-12 pt-2 ps-2 pe-2 hover:cursor-pointer hover:bg-[#9bc9ef]`} onClick={() => setweDoState("Partners")}>Partners</span>
        </div>
      </div>
      <Services/>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
      <p>dfdsf</p>
    </section>
  )
}
