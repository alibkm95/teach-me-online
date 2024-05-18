import React from 'react'
import { Link } from 'react-router-dom'

import heroImg from '../assets/hero.svg'
import { PiShootingStarThin } from "react-icons/pi";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col-reverse w-full max-w-7xl mx-auto py-8 px-6 gap-4 lg:flex-row lg:items-center">
        <div className="w-full max-w-3xl mx-auto lg:flex-1">
          <img className='block w-full' src={heroImg} alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center lg:flex-1 lg:items-start lg:gap-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r via-emerald-400 from-emerald-600 to-emerald-900 md:text-6xl lg:text-7xl">
            Teach Me Online
          </h1>
          <p className="text-lg text-center font-mono max-w-96 md:text-2xl md:max-w-xl lg:max-w-2xl lg:text-start">
            More than thousands hours of training in the field of web development. Instructors with high experience, online support and the possibility of asking questions directly from the instructor. Just start and we will continue together.
          </p>
          <Link to='/categories' className="btn btn-success w-max text-white text-lg">
            Start Here <PiShootingStarThin size={25} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero