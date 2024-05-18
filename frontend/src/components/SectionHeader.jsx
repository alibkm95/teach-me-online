import React from 'react'
import { Link } from 'react-router-dom';

import { FaLongArrowAltRight } from "react-icons/fa";

const SectionHeader = ({ title, icon, showLink = false, linkPath }) => {
  return (
    <div className="bg-base-200 p-6 rounded-ss-xl rounded-se-xl flex flex-col items-center justify-center gap-4 border-b border-b-gray-700 sm:flex-row sm:justify-between">
      <h4 className="font-bold text-3xl flex items-center gap-2">
        {icon}
        {title}
      </h4>
      {
        showLink &&
        <Link className='link link-accent link-hover flex items-center gap-2' to={linkPath}>
          More <FaLongArrowAltRight size={20} />
        </Link>
      }
    </div>
  )
}

export default SectionHeader