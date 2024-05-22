import React from 'react'
import { Link } from 'react-router-dom'

import { MdEmail } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const LoginForm = () => {
  return (
    <div className='min-w-full px-4 pt-8'>
      <span className="text-2xl font-bold block mb-2">
        Please fill the login form:
      </span>
      <form id='signup-form' className='pt-2 max-w-96'>
        <div className="flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <MdEmail className='text-emerald-500' />
                Your E-Mail:
              </span>
            </div>
            <input type="email" name='email-input' placeholder="E-Mail" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                Your Password:
                <button type='button' className="btn btn-xs inline-block ms-auto">
                  <IoMdEye size={20} className='text-amber-400' />
                  {/* <IoMdEyeOff size={20} className='text-amber-400' /> */}
                </button>
              </span>
            </div>
            <input type="password" name='password-input' placeholder="* * * * * * * *" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
        </div>
        <span className="text-sm block mt-3">
          Don't have an account? <Link to='/signup' className='link link-hover text-emerald-600 font-bold'>Create new one.</Link>
        </span>
        <span className="text-sm block mt-3">
          Forgot your login info? <Link to='/recover' className='link link-hover text-emerald-600 font-bold'>Recover.</Link>
        </span>
        <button type="submit" className="btn btn-primary text-white block mt-4 ms-auto">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm