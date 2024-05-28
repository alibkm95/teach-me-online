import React from 'react'

import { FaFilter } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

const Filterbar = () => {
  return (
    <div className='p-4 bg-base-200 rounded-box flex flex-col gap-4'>
      <div className="flex items-center justify-center gap-1 text-2xl font-bold px-4 md:justify-start md:text-3xl">
        <FaFilter className='text-amber-500' />
        <span>
          Filters
        </span>
      </div>
      <form id="filter-form">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <BiSolidCategoryAlt className='text-emerald-600' />
                Categories:
              </span>
            </div>
            <select className="select select-bordered" name='category-select'>
              <option defaultValue='all' value='all'>All</option>
              <option value='frontend'>Frontend</option>
              <option value='backend'>Backend</option>
              <option value='uiux'>UI/UX</option>
              <option value='databases'>Databases</option>
              <option value='libraries'>Libraries & packages</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <FaCode className='text-emerald-600' />
                Languages & technologies:
              </span>
            </div>
            <select className="select select-bordered" name='language-select'>
              <option defaultValue='all' value='all'>All</option>
              <option value='javascript'>Java Script</option>
              <option value='python'>Python</option>
              <option value='c'>C#</option>
              <option value='php'>Php</option>
              <option value='html'>HTML 5</option>
              <option value='css'>CSS</option>
              <option value='sql'>SQL</option>
              <option value='nosql'>NO-SQL</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex items-center gap-1">
                <FaSortAmountUp className='text-emerald-600' />
                Sort:
              </span>
            </div>
            <select className="select select-bordered" name='sort-select'>
              <option defaultValue='Newest' value='Newest'>Newest</option>
              <option value='oldest'>Oldest</option>
              <option value='popular'>Popular</option>
              <option value='az'>A-Z</option>
              <option value='z-a'>Z-A</option>
            </select>
          </label>
        </div>
        <button type='submit' className="btn btn-success block mt-4 ms-auto text-white">
          Apply
        </button>
      </form>
    </div>
  )
}

export default Filterbar