import React from 'react'

import SectionHeader from './SectionHeader';

import bannerImg from '../assets/hero2.svg'

import { MdLocalOffer } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-2 md:px-6'>
      <SectionHeader title={`What do we provide?`} icon={<MdLocalOffer className='text-red-500' />} showLink={false} linkPath='' />
      <div className="w-full flex flex-col items-center justify-center bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2 lg:flex-row">
        <div className="flex flex-col gap-2 lg:flex-1 lg:ps-20">
          <div className="flex items-center gap-2 bg-base-100 rounded-box px-2 py-4 md:text-xl lg:text-2xl">
            <FaCheckSquare className='text-emerald-600' />
            7/24 online support.
          </div>
          <div className="flex items-center gap-2 bg-base-100 rounded-box px-2 py-4 md:text-xl lg:text-2xl">
            <FaCheckSquare className='text-emerald-600' />
            Direct access to files and videos.
          </div>
          <div className="flex items-center gap-2 bg-base-100 rounded-box px-2 py-4 md:text-xl lg:text-2xl">
            <FaCheckSquare className='text-emerald-600' />
            Update courses regularly.
          </div>
          <div className="flex items-center gap-2 bg-base-100 rounded-box px-2 py-4 md:text-xl lg:text-2xl">
            <FaCheckSquare className='text-emerald-600' />
            Exercises and challenges for each course.
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto lg:flex-1">
          <img className='block w-full' src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banner