import React from 'react'
import {Link} from 'react-router-dom'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignupForm = () => {
  return (
    <div className='min-w-full px-4 pt-8'>
      <span className="text-2xl font-bold block mb-2">
        Please fill the registration form:
      </span>
      <form id='signup-form' className='pt-2 max-w-96'>
        <div className="flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <FaUser className='text-emerald-500' />
                What is your name?
              </span>
            </div>
            <input type="text" name='fullName-input' placeholder="Full name" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <MdEmail className='text-emerald-500' />
                What is your E-Mail?
              </span>
            </div>
            <input type="email" name='email-input' placeholder="E-Mail" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                Create a password:
                <button type='button' className="btn btn-xs inline-block ms-auto">
                  <IoMdEye size={20} className='text-amber-400' />
                  {/* <IoMdEyeOff size={20} className='text-amber-400' /> */}
                </button>
              </span>
            </div>
            <input type="password" name='password-input' placeholder="********" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
        </div>
        <span className="text-sm block mt-3">
          Already have an account? <Link to='/login' className='link link-hover text-emerald-600 font-bold'>Login.</Link>
        </span>
        <button type="submit" className="btn btn-primary text-white block mt-4 ms-auto">
          Signup
        </button>
      </form>
    </div>
  )
}

export default SignupForm