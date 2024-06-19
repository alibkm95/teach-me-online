import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import useGetUserCourses from '../hooks/useGetUserCourses'

import { MdOutlineOndemandVideo } from "react-icons/md";
import toast from 'react-hot-toast';

const ContentAcordionItems = ({ episode }) => {

  const { authUser } = useAuthContext()
  const { getUserCourses, userCourses } = useGetUserCourses()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (authUser) {
      getUserCourses()
    }
  }, [])

  useEffect(() => {
    const subscribedCourse = userCourses.find(course => {
      return course._id === course._id
    })

    if (subscribedCourse) {
      setIsSubscribed(true)
    }
  }, [userCourses])

  const handleNavigate = (episodeId) => {
    if (!isSubscribed) { return toast.error('You are not subscribed to this course!') }
    navigate(`/courseContents/${episodeId}`)
  }

  const timeConverter = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60)
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60)

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className='w-full p-2 bg-base-300 rounded flex items-center justify-between'>
      <h4 className="flex items-center gap-2 flex-1">
        <MdOutlineOndemandVideo className='text-xl text-red-600' />
        <p className='link link-hover hover:text-emerald-400 capitalize' onClick={() => { handleNavigate(episode._id) }}>
          {episode.title}
        </p>
      </h4>
      <span className="text-xs">
        {timeConverter(episode.duration)}
      </span>
    </div>
  )
}

export default ContentAcordionItems