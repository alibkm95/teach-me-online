import React from 'react'

import CourseDetailBox from './CourseDetailBox'

import { BsInfoCircleFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { BsBackpack4Fill } from "react-icons/bs";

const CourseDetailesContainer = ({ course }) => {

  const timeConverter = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return (
    <div className='w-full my-8 rounded-box grid grid-cols-2 gap-2 sm:grid-cols-3'>
      <CourseDetailBox
        icon={<BsInfoCircleFill className='text-emerald-500' />}
        title='Status'
        content={course.courseStatus}
      />
      <CourseDetailBox
        icon={<FaClock className='text-emerald-500' />}
        title='Duration'
        content={timeConverter(course.totalDuration)}
      />
      <CourseDetailBox
        icon={<FaCalendarAlt className='text-emerald-500' />}
        title='Last update'
        content={new Date(course.updatedAt).toLocaleDateString()}
      />
      <CourseDetailBox
        icon={<IoPeople className='text-emerald-500' />}
        title='Students'
        content={course.studentsCount.toLocaleString()}
      />
      <CourseDetailBox
        icon={<BsBackpack4Fill className='text-emerald-500' />}
        title='Requirements'
        content={course.requirements.length ? course.requirements.join('-') : 'No requirements'}
      />
      <CourseDetailBox
        icon={<FaStar className='text-amber-500' />}
        title='Popularity'
        content={course.score}
      />
    </div>
  )
}

export default CourseDetailesContainer