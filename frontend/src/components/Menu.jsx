import React, { useContext } from 'react'

import { MenuContext } from '../context/MenuAndCartConext';

import { BiSearchAlt2 } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiHeadsetFill } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";

const Menu = () => {

  const { isMenuOpen, toggleMenu } = useContext(MenuContext)

  return (
    <div className='flex-1'>
      <div className={`flex flex-col fixed top-24 right-2 bg-base-300 p-4 rounded-box border border-gray-600 transition-all ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} duration-200 z-[999] lg:static lg:flex-row-reverse lg:p-0 lg:border-0 lg:items-center lg:translate-x-0 lg:opacity-100`}>
        <div className="">
          <form className='flex gap-1 items-center justify-center pb-2 border-b border-b-emerald-700 lg:p-0 lg:border-0'>
            <input
              name='search-input'
              id='search-input'
              type="text"
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
            <a href="#">
              <FaHome />
              Home
            </a>
          </li>
          <li className="menu__items">
            <a href="#">
              <BiSolidCategoryAlt />
              Categories
            </a>
          </li>
          <li className="menu__items">
            <a href="#">
              <PiHeadsetFill />
              Support
            </a>
          </li>
          <li className="menu__items">
            <a href="#">
              <RiArticleFill />
              Articles
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu