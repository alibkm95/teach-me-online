import React from 'react'

import SectionHeader from './SectionHeader'
import fallBackCourseCover from '../assets/fallBackCourseCover.png'
import { FaVideo } from "react-icons/fa6";

const Player = ({ episode }) => {
  return (
    <div className='bg-base-200 rounded-box mb-8'>
      <SectionHeader title={episode.title} icon={<FaVideo className='text-red-500' />} showLink={false} linkPath='/' />
      <div className="max-w-4xl mx-auto py-4 px-2">
        <video
          className='w-full aspect-video bg-neutral rounded-box'
          controls
          src={episode.video}
          poster={episode.course.cover.length ? `/api/file/course/${episode.course.cover}` : fallBackCourseCover}
        >
        </video>
      </div>
    </div>
  )
}

export default Player