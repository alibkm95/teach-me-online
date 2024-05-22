import React, { useState } from 'react'

import Steps from '../components/Steps';
import RecoverForm from '../components/RecoverForm';
import FindAccForm from '../components/FindAccForm';
import Verification from '../components/Verification';

import { TfiReload } from "react-icons/tfi";

import recoverImg from '../assets/recover.svg'

const Recover = () => {

  const [activeStep, setActiveStep] = useState(3)

  const steps = [
    { id: 1, stepName: 'Find Acc', stepNumber: 1 },
    { id: 2, stepName: 'Verify Email', stepNumber: 2 },
    { id: 3, stepName: 'Change password', stepNumber: 3 },
  ]

  return (
    <section className='w-full max-w-6xl mx-auto my-6 p-2'>
      <div className="bg-base-200 p-4 rounded-box md:p-8">
        <div className="flex items-center justify-center gap-2 font-bold mb-6 text-2xl md:justify-start lg:text-3xl">
          <TfiReload className='text-amber-500' />
          <h5>Recover</h5>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 bg-base-300 rounded-box">
            <img className='w-full block' src={recoverImg} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-4 md:py-6">
            <Steps activeStep={activeStep} steps={steps} />
            <div className='flex-1 overflow-x-hidden'>
              <div className="flex flex-row transition-all duration-300'" style={{ transform: `translateX(-${(activeStep - 1) * 100}%)` }}>
                <FindAccForm />
                <Verification />
                <RecoverForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recover