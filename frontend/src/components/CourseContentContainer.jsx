import React, { useEffect } from 'react'

import NotFound from '../pages/NotFound'

import ContentAcordion from './ContentAcordion'
import useGetCourseContent from '../hooks/useGetCourseContent'
import useCourseAccess from '../hooks/useCourseAccess'

const CourseContentContainer = ({ courseId }) => {

  const { loading, getContents, content } = useGetCourseContent()
  const { hasAccessToCourse, courseAccess } = useCourseAccess()

  useEffect(() => {
    getContents(courseId)
    hasAccessToCourse(courseId)
  }, [courseId])

  return (
    <div className='flex flex-col gap-2'>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        content.length > 0 &&
        content.map(item => (<ContentAcordion key={item._id} season={item} access={courseAccess} />))
      }
      {
        content.length === 0 &&
        !loading &&
        <NotFound />
      }
    </div>
  )
}

export default CourseContentContainer