import React from 'react'

const CourseDetailBox = ({ icon, title, content }) => {
  return (
    <div className='w-full p-2 bg-base-200 rounded-box flex flex-col gap-1 items-center text-center md:text-start md:flex-row'>
      <div className="flex items-center justify-center text-xl md:text-3xl md:min-w-12 lg:min-w-16 lg:text-4xl">
        {icon}
      </div>
      <div className="flex flex-col gap-1 md:flex-1">
        <span className='text-bold text-white'>{title}</span>
        <span>{content}</span>
      </div>
    </div>
  )
}

export default CourseDetailBox