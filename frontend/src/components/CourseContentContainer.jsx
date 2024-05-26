import React from 'react'

import ContentAcordion from './ContentAcordion'

const CourseContentContainer = () => {
  return (
    <div className='flex flex-col gap-2'>
      <ContentAcordion />
      <ContentAcordion />
      <ContentAcordion />
    </div>
  )
}

export default CourseContentContainer