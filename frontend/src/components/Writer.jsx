import React from 'react'

import { PiArticleMediumFill } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";

const Writer = () => {
  return (
    <div className='p-4 bg-base-200 rounded-box'>
      <div className="mb-2 border-b border-b-gray-700 pb-2 text-xl flex items-center gap-2">
        <PiArticleMediumFill className='text-amber-500 text-3xl' />
        Written by :
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
      <ul className="flex items-center flex-wrap gap-1 mt-4">
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <BsCalendarDateFill />
          2024-11-03 14:15
        </li>
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <FaHashtag />
          JavaScript
        </li>
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <FaHashtag />
          NodeJS
        </li>
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <FaHashtag />
          NPM
        </li>
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <FaHashtag />
          React
        </li>
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <FaHashtag />
          MUI
        </li>
      </ul>
    </div>
  )
}

export default Writer