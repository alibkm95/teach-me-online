import React from 'react'

const Steps = ({activeStep}) => {
  return (
    <div>
      <ul className="steps w-full">
        <li className={`step ${activeStep >= 1 ? 'step-primary' : ''}`}>
          <span className="text-sm">Agreement</span>
        </li>
        <li className={`step ${activeStep >= 2 ? 'step-primary' : ''}`}>
          <span className="text-sm">Register</span>
        </li>
        <li className={`step ${activeStep >= 3 ? 'step-primary' : ''}`}>
          <span className="text-sm">
            Verification
          </span>
        </li>
        <li className={`step ${activeStep >= 4 ? 'step-primary' : ''}`}>
          <span className="text-sm">
            Done!
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Steps