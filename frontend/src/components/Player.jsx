import React from 'react'

import courseImg from '../assets/JavaScript.png'

import SectionHeader from './SectionHeader'

import { FaVideo } from "react-icons/fa6";

const Player = () => {
  return (
    <div className='bg-base-200 rounded-box mb-8'>
      <SectionHeader title={`lesson title`} icon={<FaVideo className='text-red-500' />} showLink={false} linkPath='/' />
      <div className="max-w-4xl mx-auto py-4 px-2">
        <video className='w-full aspect-video bg-neutral rounded-box' controls src="" poster={courseImg}></video>
      </div>
    </div>
  )
}

export default Player