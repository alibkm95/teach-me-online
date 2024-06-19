import React, { useState } from 'react'

const useGetCourseComments = () => {
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState([])

  const getComments = async (courseId) => {
    setLoading(true)

    try {
      const res = await fetch(`/api/review/${courseId}`)
      if (!res.ok) throw new Error
      const data = await res.json()
      setComments(data.reviews)
    } catch (error) {
      setComments([])
    } finally {
      setLoading(false)
    }
  }

  return { loading, getComments, comments }
}

export default useGetCourseComments