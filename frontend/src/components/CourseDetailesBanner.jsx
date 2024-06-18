import React from 'react'

import courseImg from '../assets/JavaScript.png'
import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const CourseDetailesBanner = ({ course }) => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      <div className="w-full">
        <video className='w-full aspect-video rounded-box' src={course.intro} poster={course.cover} controls></video>
      </div>
      <div className="flex flex-col gap-4 px-4 lg:px-0">
        <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>{course.title}</h2>
        <p className='md:text-lg xl:text-xl'>{course.description}</p>
        <span className='flex items-center gap-1 text-2xl'>
          {course.price}
          <FaMoneyCheckDollar className='text-amber-500' />
        </span>
        <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
          <span className='text-white flex items-center gap-1'>
            <FaUser size={25} className='text-emerald-600' />
            You registered to this course
          </span>
          <a href="#lessons" className="btn btn-success rounded-full text-white">
            <FaBookOpen size={25} />
            Start Course
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailesBanner