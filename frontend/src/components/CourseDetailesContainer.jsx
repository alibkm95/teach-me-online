import React from 'react'

import CourseDetailBox from './CourseDetailBox'

import { BsInfoCircleFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { BsBackpack4Fill } from "react-icons/bs";

const CourseDetailesContainer = () => {
  return (
    <div className='w-full my-8 rounded-box grid grid-cols-2 gap-2 sm:grid-cols-3'>
      <CourseDetailBox icon={<BsInfoCircleFill className='text-emerald-500' />} title='Status' content='Completed' />
      <CourseDetailBox icon={<FaClock className='text-emerald-500' />} title='Duration' content='88 hours' />
      <CourseDetailBox icon={<FaCalendarAlt className='text-emerald-500' />} title='Last update' content='2024-10-11' />
      <CourseDetailBox icon={<IoPeople className='text-emerald-500' />} title='Students' content='61072' />
      <CourseDetailBox icon={<BsBackpack4Fill className='text-emerald-500' />} title='Requirements' content='HTML-CSS' />
      <CourseDetailBox icon={<FaStar className='text-amber-500' />} title='Popularity' content='4.8' />
    </div>
  )
}

export default CourseDetailesContainer