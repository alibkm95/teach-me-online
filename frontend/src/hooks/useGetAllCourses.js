import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useGetAllCourses = () => {
  const [loading, setLoading] = useState(false)
  const [coursesData, setCoursesData] = useState(null)

  const getAllCourses = (optionObj) => {
    setLoading(true)

    const params = new URLSearchParams()

    for (const [key, value] of Object.entries(optionObj)) {
      if (value && value.length) {
        params.append(key, value)
      }
    }

    fetch(`/api/courses?${params.toString()}`)
      .then(res => res.json())
      .then(data => setCoursesData(data))
      .catch(err => {
        setCoursesData(null)
        toast.error(err.msg)
      })
      .finally(() => setLoading(false))
  }

  return { loading, getAllCourses, coursesData }
}

export default useGetAllCourses