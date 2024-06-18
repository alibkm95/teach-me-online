import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const useGetSingleCourse = () => {
  const [loading, setLoading] = useState(false)
  const [course, setCourse] = useState(null)
  const navigate = useNavigate()

  const getSingleCourse = async (courseId) => {
    setLoading(true)

    try {
      const res = await fetch(`/api/courses/${courseId}`)
      if (res.status !== 200) throw new Error
      const data = await res.json()
      setCourse(data.requestedCourse)
    } catch (error) {
      setCourse(null)
      toast.error('error geting data!')
      navigate('/categories')
    } finally {
      setLoading(false)
    }
  }

  return { loading, getSingleCourse, course }
}

export default useGetSingleCourse