import React from 'react'

import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center pt-16">
      <div className="join border border-neutral">
        <button className="join-item btn text-lg">
          <FaCaretLeft size={25} />
        </button>
        <button className="join-item btn min-w-32 md:min-w-96">Page 22</button>
        <button className="join-item btn text-lg">
          <FaCaretRight size={25} />
        </button>
      </div>
    </div>
  )
}

export default Pagination