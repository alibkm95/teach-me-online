import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useGetAllCourses = () => {
  const [loading, setLoading] = useState(false)
  const [courses, setCourses] = useState([])

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
      .then(data => setCourses(data.courses))
      .catch(err => {
        setCourses([])
        toast.error(err.msg)
      })
      .finally(() => setLoading(false))
  }

  return { loading, getAllCourses, courses }
}

export default useGetAllCourses