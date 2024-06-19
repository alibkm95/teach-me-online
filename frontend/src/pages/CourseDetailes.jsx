import React, { useEffect, useState } from 'react'

import CourseDetailesBanner from '../components/CourseDetailesBanner'
import CourseDetailesContainer from '../components/CourseDetailesContainer'
import Instructor from '../components/Instructor'
import SimilarItems from '../components/SimilarItems'
import CourseContentContainer from '../components/CourseContentContainer'
import CommentsContainer from '../components/CommentsContainer'
import useGetSingleCourse from '../hooks/useGetSingleCourse'
import { useParams } from 'react-router-dom'

const CourseDetailes = () => {

  const { id: courseId } = useParams()
  const { loading, getSingleCourse, course } = useGetSingleCourse()
  const [activeTab, setActiveTab] = useState('content')

  useEffect(() => {
    getSingleCourse(courseId)
  }, [courseId])

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2  md:px-6">
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        course &&
        <>
          <CourseDetailesBanner course={course} />
          <CourseDetailesContainer course={course} />
          <div className="grid grid-cols-1 rounded-box gap-2 relative lg:grid-cols-3">
            <aside className="h-max row-start-2 lg:row-start-1 lg:sticky lg:top-0">
              <Instructor teacher={course.instructor} />
              <SimilarItems category={course.categories} />
            </aside>
            <div className="lg:col-span-2">
              <div className="bg-base-200 p-4 rounded-box">
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                  <a
                    onClick={() => { setActiveTab('content') }}
                    role="tab"
                    className={`tab [--tab-border-color:#374151] ${activeTab === 'content' ? 'tab-active' : ''}`}>
                    Content
                  </a>
                  <a
                    onClick={() => { setActiveTab('comment') }}
                    role="tab"
                    className={`tab [--tab-border-color:#374151] ${activeTab === 'comment' ? 'tab-active' : ''}`}>
                    Comments
                  </a>
                </div>
                <div className="p-4 bg-base-100 rounded-ee-lg rounded-es-lg border border-gray-700 border-t-0" id='lessons'>
                  {/* <span className="loading loading-bars loading-lg block mx-auto"></span> */}
                  {activeTab === 'content' && <CourseContentContainer courseId={course._id} />}
                  {activeTab === 'comment' && <CommentsContainer />}
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default CourseDetailes