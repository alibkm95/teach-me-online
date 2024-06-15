import React from 'react'

import { IoFingerPrint } from "react-icons/io5";
import { GoNumber } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const RecoverForm = () => {
  return (
    <div className='min-w-full px-4 pt-8'>
      <span className="text-xl font-bold block mb-2">
        Verify & change your password:
      </span>
      <form id='signup-form' className='pt-2 max-w-96'>
        <div className="flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <GoNumber size={25} className='text-emerald-500' />
                Insert 6-digit code that sent to you:
              </span>
            </div>
            <input
              type="text"
              name='fullName-input'
              placeholder="******"
              className="input input-bordered input-sm w-full lg:input-md"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                Create a new password:
                <button type='button' className="btn btn-xs inline-block ms-auto">
                  <IoMdEye size={20} className='text-amber-400' />
                  {/* <IoMdEyeOff size={20} className='text-amber-400' /> */}
                </button>
              </span>
            </div>
            <input type="password" name='password-input' placeholder="* * * * * * * *" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary text-white block mt-4 ms-auto">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RecoverForm