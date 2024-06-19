import React, { useState } from 'react'

const useGetCourseContent = () => {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])

  const getContents = (courseId) => {
    setLoading(true)

    fetch(`/api/courses/content/${courseId}`)
      .then(res => res.json())
      .then(data => setContent(data.content))
      .catch(err => setContent([]))
      .finally(() => setLoading(false))
  }

  return { loading, getContents, content }
}

export default useGetCourseContent