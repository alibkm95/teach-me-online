import React from 'react'

import { FaExternalLinkAlt } from "react-icons/fa";

const Agreement = () => {
  return (
    <div className="min-w-full px-4 py-8">
      <span className="text-2xl font-bold block mb-2">
        Policies and Terms of use:
      </span>
      <p>
        Please read the terms of use, privacy and policy below to proceed with registration
      </p>
      <ul className='my-2 ps-8 list-disc'>
        <li>
          <a href="#" className="link link-hover text-emerald-600">
            Terms of use
            <FaExternalLinkAlt className='inline-block ms-2' />
          </a>
        </li>
        <li>
          <a href="#" className="link link-hover text-emerald-600">
            Privacy and policies
            <FaExternalLinkAlt className='inline-block ms-2' />
          </a>
        </li>
      </ul>
      <div className="form-control">
        <label className="cursor-pointer label flex items-center justify-start">
          <input type="checkbox" name='aggrement-input' className="checkbox checkbox-success me-2" />
          <span className="label-text">
            I have read and accept all of the above
          </span>
        </label>
      </div>
      <button className="btn btn-primary text-white block mt-4 ms-auto">
        Continue
      </button>
    </div>
  )
}

export default Agreement