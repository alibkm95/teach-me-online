import React from 'react'

import fallBackUserProfile from '../assets/fallBackUserProfile.png'

import { PiArticleMediumFill } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";

const Writer = ({ article }) => {

  return (
    <div className='p-4 bg-base-200 rounded-box'>
      <div className="mb-2 border-b border-b-gray-700 pb-2 text-xl flex items-center gap-2">
        <PiArticleMediumFill className='text-amber-500 text-3xl' />
        Written by :
      </div>
      <div className="flex items-center gap-2 pt-2">
        <div className="avatar">
          <div className="w-20 mask mask-squircle">
            <img src={article.creator.user.profile.length ? `/api/file/profile/${article.creator.user.profile}` : fallBackUserProfile} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href='#/' className='link link-hover link-success text-xl font-bold'>{article.creator.user.name}</a>
          <span className='text-sm'>
            {article.creator.position}
          </span>
        </div>
      </div>
      <ul className="flex items-center flex-wrap gap-1 mt-4">
        <li className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
          <BsCalendarDateFill />
          {new Date(article.createdAt).toLocaleString()}
        </li>
        {
          article.creator.skills.length > 0 &&
          article.creator.skills.map((skill, index) => (
            <li key={index + 1} className="flex items-center gap-1 bg-amber-500/25 text-amber-500 rounded-full text-xs py-1 px-2">
              <FaHashtag />
              {skill}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Writer