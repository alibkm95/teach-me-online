import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { MenuContext } from '../context/MenuAndCartConext';

import { BiSearchAlt2 } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiHeadsetFill } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";

const Menu = () => {

  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault()

    if (!searchQuery.trim().length) return
    navigate(`/categories?q=${searchQuery}`)
  }

  return (
    <div className='flex-1'>
      <div className={`flex flex-col fixed top-24 right-2 bg-base-300 p-4 rounded-box border border-gray-600 transition-all ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} duration-200 z-[999] lg:static lg:flex-row-reverse lg:p-0 lg:border-0 lg:items-center lg:translate-x-0 lg:opacity-100`}>
        <div className="">
          <form className='flex gap-1 items-center justify-center pb-2 border-b border-b-emerald-700 lg:p-0 lg:border-0' onSubmit={submitHandler}>
            <input
              name='search-input'
              id='search-input'
              type="text"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value.trim()) }}
              placeholder="search..."
              className="input input-sm input-bordered w-full max-w-xs xl:input-md"
            />
            <button type="submit" className='btn btn-sm btn-square xl:btn-md'>
              <BiSearchAlt2 size={20} />
            </button>
          </form>
        </div>
        <ul className="menu text-lg lg:flex-1 lg:flex-row lg:text-sm xl:text-lg">
          <li className="menu__items">
            <Link to='/'>
              <FaHome />
              Home
            </Link>
          </li>
          <li className="menu__items">
            <Link to='/categories'>
              <BiSolidCategoryAlt />
              Categories
            </Link>
          </li>
          <li className="menu__items">
            <Link to='/ticket'>
              <PiHeadsetFill />
              Support
            </Link>
          </li>
          <li className="menu__items">
            <Link to='/articles'>
              <RiArticleFill />
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu