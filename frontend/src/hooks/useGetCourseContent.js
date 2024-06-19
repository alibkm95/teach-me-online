import React, { useState } from 'react'

const useGetCourseContent = () => {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])

  const getContents = async (courseId) => {
    setLoading(true)

    try {
      const res = await fetch(`/api/courses/content/${courseId}`)
      if (!res.ok) throw new Error
      const data = await res.json()
      setContent(data.content)
    } catch (error) {
      setContent([])
    } finally {
      setLoading(false)
    }
  }

  return { loading, getContents, content }
}

export default useGetCourseContent