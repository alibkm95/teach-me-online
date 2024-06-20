import React, { useEffect, useState } from 'react'

import { useAuthContext } from '../context/AuthContext'
import useGetUserCourses from '../hooks/useGetUserCourses';

import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

import fallBackCourseCover from '../assets/fallBackCourseCover.png'

const CourseDetailesBanner = ({ course }) => {

  const { authUser } = useAuthContext()
  const { loading, getUserCourses, userCourses } = useGetUserCourses()
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    if (authUser) {
      getUserCourses()
    }
  }, [])

  useEffect(() => {
    const subscribedCourse = userCourses.find(userCourse => {
      return userCourse._id === course._id
    })

    if (subscribedCourse) {
      setIsSubscribed(true)
    }
  }, [userCourses])

  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      <div className="w-full">
        <video
          className='w-full aspect-video rounded-box'
          src={course.intro}
          poster={course.cover.length ? course.cover : fallBackCourseCover}
          controls>
        </video>
      </div>
      <div className="flex flex-col gap-4 px-4 lg:px-0">
        <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>{course.title}</h2>
        <p className='md:text-lg xl:text-xl'>{course.description}</p>
        <span className='flex items-center gap-1 text-2xl'>
          {course.price}
          <FaMoneyCheckDollar className='text-amber-500' />
        </span>
        <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
          {
            loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
          }
          {
            isSubscribed &&
            <>
              <span className='text-white flex items-center gap-1'>
                <FaUser size={25} className='text-emerald-600' />
                You are subscribed to this course.
              </span>
              <a href="#lessons" className="btn btn-success rounded-full text-white">
                <FaBookOpen size={25} />
                Start Course
              </a>
            </>
          }
          {
            !isSubscribed &&
            <>
              <span className='text-white flex items-center gap-1'>
                <FaUser size={25} className='text-emerald-600' />
                You are not subscribed to this course.
              </span>
              <button className="btn btn-success rounded-full text-white">
                <FaCartPlus size={25} />
                add to cart
              </button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default CourseDetailesBanner