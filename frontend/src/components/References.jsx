import React from 'react'

import { TbBrandWikipedia } from "react-icons/tb";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si";

const References = () => {
  return (
    <ul className='flex items-center justify-center gap-4 flex-wrap'>
      <li>
        <a href="https://www.google.com" className="link link-info flex items-center" target='_blank'>
          <TbBrandWikipedia className='text-2xl' /> wikipedia
        </a>
      </li>
      <li>
        <a href="https://www.google.com" className="link link-info flex items-center" target='_blank'>
          <IoLogoStackoverflow className='text-2xl' /> stackoverflow
        </a>
      </li>
      <li>
        <a href="https://www.google.com" className="link link-info flex items-center" target='_blank'>
          <FaGithub className='text-2xl' /> github
        </a>
      </li>
      <li>
        <a href="https://www.google.com" className="link link-info flex items-center" target='_blank'>
          <SiCodeproject className='text-2xl' /> codeproject
        </a>
      </li>
    </ul>
  )
}

export default References