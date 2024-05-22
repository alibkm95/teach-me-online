import React from 'react'

import { MdEmail } from "react-icons/md";

const FindAccForm = () => {
  return (
    <div className='min-w-full px-4 pt-8'>
      <span className="text-2xl font-bold block mb-2">
        Please insert your E-Mail:
      </span>
      <form className="pt-2 max-w-96" id="find-acc-form">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text flex items-center gap-1">
              <MdEmail className='text-emerald-500' />
              What is your E-Mail?
            </span>
          </div>
          <input type="email" name='email-input' placeholder="E-Mail" className="input input-bordered input-sm w-full lg:input-md" />
        </label>
        <div className="my-4">
          <button type="submit" className="btn btn-primary text-white block ms-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FindAccForm