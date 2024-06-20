import React from 'react'

import fallBackUserProfile from '../assets/fallBackUserProfile.png'

import { FaStar } from "react-icons/fa6";

const Review = ({ review }) => {

  const roleOpt = {
    USER: ['student', 'text-emerald-600'],
    ROOTADMIN: ['admin', 'text-primary'],
    INSTRUCTOR: ['instructor', 'text-orange-500']
  }

  return (
    <div className='p-4 bg-base-200 rounded mb-2'>
      <p className='text-lg font-medium mb-4'>{review.comment}</p>
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-16 lg:w-18 mask mask-circle">
            <img className='aspect-square object-contain' src={review.user.profile.length ? review.user.profile : fallBackUserProfile} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">
            {review.user.name}
            <span className={`stat-title text-sm ${roleOpt[review.user.role][1]}`}>{" _ " + roleOpt[review.user.role][0]}</span>
          </p>
          <p className="flex items-center gap-1 text-xs">
            {
              review.user.role === 'USER' &&
              <>
                {review.rating}
                <FaStar className='text-amber-500' /> __
              </>
            }
            <span className='stat-desc'>{new Date(review.createdAt).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review