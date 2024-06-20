import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const useCourseAccess = () => {
  const { authUser } = useAuthContext()
  const [courseAccess, setCourseAccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const hasAccessToCourse = async (courseId) => {
    if (!authUser) return

    setLoading(true)

    try {
      const res = await fetch(`/api/courses/access/${courseId}`)
      const data = await res.json()
      setCourseAccess(data.access)
    } catch (error) {
      setCourseAccess(false)
    } finally {
      setLoading(false)
    }
  }

  return { courseAccess, loading, hasAccessToCourse }
}

export default useCourseAccess