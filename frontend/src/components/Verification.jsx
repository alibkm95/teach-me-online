import React from 'react'

import { GoNumber } from "react-icons/go";

const Verification = () => {
  return (
    <div className='min-w-full px-4 pt-8'>
      <span className="text-2xl font-bold block mb-2">
        Please verify your E-Mail:
      </span>
      <p className="">
        Please enter the 6-digit code sent to your email address. If you have not received an email, please check your spam folder
      </p>
      <form className="pt-2 max-w-96" id="verification-form">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text flex items-center gap-1">
              <GoNumber size={25} className='text-emerald-500' />
              Insert 6-digit code:
            </span>
          </div>
          <input type="text" name='fullName-input' placeholder="******" className="input input-bordered input-sm w-full lg:input-md" />
        </label>
        <div className="my-4">
          <button type="submit" className="btn btn-primary text-white block ms-auto">
            Verify
          </button>
        </div>
      </form>
    </div>
  )
}

export default Verification