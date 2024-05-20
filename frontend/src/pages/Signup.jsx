import React, { useState } from 'react'

import Steps from '../components/Steps';
import SignupForm from '../components/SignupForm';
import Verification from '../components/Verification';
import Agreement from '../components/Agreement';
import SignupSuccess from '../components/SignupSuccess';

import { FaSignInAlt } from "react-icons/fa";

import registerImg from '../assets/register.svg'

const Signup = () => {

  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className='w-full max-w-6xl mx-auto my-6 p-2'>
      <div className="bg-base-200 p-4 rounded-box md:p-8">
        <div className="flex items-center justify-center gap-2 font-bold mb-6 text-2xl md:justify-start lg:text-3xl">
          <FaSignInAlt className='text-amber-500' />
          <h5>Signup</h5>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 bg-base-300 rounded-box">
            <img className='w-full block' src={registerImg} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-4 md:py-6">
            <Steps activeStep={activeStep} />
            <div className='flex-1 overflow-x-hidden'>
              <div className="flex flex-row transition-all duration-300'" style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}>
                <Agreement />
                <SignupForm />
                <Verification />
                <SignupSuccess />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup