import React, { useEffect } from 'react'

import SimilarProductCart from './SimilarProductCart'
import useGetUserCourses from '../hooks/useGetUserCourses'

const MyCourses = () => {

  const { loading, getUserCourses, userCourses } = useGetUserCourses()

  useEffect(() => {
    getUserCourses()
  }, [])

  return (
    <>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      <div className='grid gap-2 place-items-center md:grid-cols-2'>
        {
          userCourses.length > 0 &&
          userCourses.map(userCourse => (<SimilarProductCart key={userCourse._id} course={userCourse.course} />))
        }
      </div>
      {
        !loading &&
        userCourses.length === 0 &&
        <div role="alert" className="alert bg-base-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" stroke='orange' strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>No course found! Subscribe to a course and your courses will appear here.</span>
        </div>
      }
    </>
  )
}

export default MyCourses