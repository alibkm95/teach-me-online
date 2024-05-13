import React from 'react'

import { IoHome } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="menu fixed top-24 z-50 left-6 rounded-lg bg-base-300 hidden lg:static lg:block"> {/*hiden lg:block*/}
      <ul className="menu__list flex flex-col min-w-64 text-md lg:flex-row">
        <li className="menu__list-item w-max ms-auto lg:hidden">
          <a href="#">
            <IoCloseCircleSharp size={25} />
          </a>
        </li>
        <li className="menu__list-item">
          <a href="#">
            <IoHome size={20} />
            Home
          </a>
        </li>
        <li className="menu__list-item">
          <a href="#">
            <BiSolidCategoryAlt size={20} />
            Categories
          </a>
        </li>
        <li className="menu__list-item">
          <a href="#">
            <MdSupportAgent size={20} />
            support
          </a>
        </li>
        <li className="menu__list-item">
          <a href="#">
            <RiArticleFill size={20} />
            Articles
          </a>
        </li>
        <li className="menu__list-item">
          <a href="#">
            <FaQuestionCircle size={20} />
            FAQ
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu