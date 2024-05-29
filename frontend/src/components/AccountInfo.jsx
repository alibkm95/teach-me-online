import React from 'react'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";

const AccountInfo = () => {
  return (
    <div className='p-4 bg-base-200 rounded-box'>
      <div className="flex flex-col items-center gap-2 justify-center">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <p className="text-2xl font-bold">
          Users name
        </p>
        <p className="text-sm">
          user@mail.com
        </p>
        <button type="button" className='btn btn-error btn-sm text-white'>
          logout
        </button>
      </div>
      <div className="divider"></div>
      <form id="account-form" className='max-w-96 mx-auto'>
        <div className="flex flex-col gap-2 px-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <FaUser className='text-emerald-500' />
                Your name:
              </span>
            </div>
            <input type="text" name='fullName-input' placeholder="Full name" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <MdEmail className='text-emerald-500' />
                Your E-Mail address:
              </span>
            </div>
            <input type="email" name='email-input' placeholder="E-Mail" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <div className="divider text-xs">password</div>
          <span className='text-xs'>
            <span className="text-red-600 pe-1 leading-none text-xl">*</span>
            If you don't want to update your password, leave it blank!
          </span>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                Old password:
              </span>
            </div>
            <input type="password" name='old-password-input' placeholder="* * * * * * * *" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="w-full label-text flex items-center gap-1">
                <IoFingerPrint className='text-emerald-500' />
                New password:
              </span>
            </div>
            <input type="password" name='new-password-input' placeholder="* * * * * * * *" className="input input-bordered input-sm w-full lg:input-md" />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2">
          <label htmlFor="attach-input" className="btn btn-warning flex items-center justify-center">
            <input type="file" name="profile-input" id="profile-input" className='hidden' />
            Upload new profile
          </label>
          <button type="submit" className="btn btn-success text-white">
            Update info
            <span className="loading loading-ring loading-md"></span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AccountInfo