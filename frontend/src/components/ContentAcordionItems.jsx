import React from 'react'
import { Link } from 'react-router-dom';

import { MdOutlineOndemandVideo } from "react-icons/md";

const ContentAcordionItems = () => {
  return (
    <div className='w-full p-2 bg-base-300 rounded flex items-center justify-between'>
      <h4 className="flex items-center gap-2 flex-1">
        <MdOutlineOndemandVideo className='text-xl text-red-600' />
        <Link to='/courseContents/123' className='link link-hover hover:text-emerald-400'>
          lesson title
        </Link>
      </h4>
      <span className="text-xs">
        18:20
      </span>
    </div>
  )
}

export default ContentAcordionItems