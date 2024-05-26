import React from 'react'

import { FaChalkboardTeacher } from "react-icons/fa";

const Instructor = () => {
  return (
    <div className='p-4 bg-base-200 rounded-box'>
      <div className="mb-2 border-b border-b-gray-700 pb-2 text-xl flex items-center gap-2">
        <FaChalkboardTeacher className='text-amber-500 text-3xl' />
        Instructors Info
      </div>
      <div className="flex items-center gap-2 pt-2">
        <div className="avatar">
          <div className="w-20 mask mask-squircle">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href='#/' className='link link-hover link-success text-xl font-bold'>Elisabeth Olsen</a>
          <span className='text-sm'>
            Full stack web developer
          </span>
        </div>
      </div>
    </div>
  )
}

export default Instructor