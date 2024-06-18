import React from 'react'

import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const Pagination = ({ onNextPage, onPrevPage, currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center pt-16">
      <div className="join border border-neutral">
        <button
          className="join-item btn text-lg"
          onClick={onPrevPage}
          disabled={currentPage === 1 ? 'disabled' : ''}
        >
          <FaCaretLeft size={25} />
        </button>
        <button className="join-item btn min-w-32 md:min-w-96">Page {currentPage} of {totalPages}</button>
        <button
          className="join-item btn text-lg"
          onClick={onNextPage}
          disabled={currentPage === totalPages ? 'disabled' : ''}
        >
          <FaCaretRight size={25} />
        </button>
      </div>
    </div>
  )
}

export default Pagination