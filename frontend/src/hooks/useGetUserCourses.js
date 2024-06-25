import React, { useEffect, useState } from 'react'

const useGetUserCourses = () => {
  const [loading, setLoading] = useState(false)
  const [userCourses, setUserCourses] = useState([])

  const getUserCourses = async () => {
    setLoading(true)

    try {
      const res = await fetch('/api/user/myCourses')
      if (res.status !== 200) throw new Error
      const data = await res.json()
      setUserCourses(data.userCourses)
    } catch (error) {
      setUserCourses([])
    } finally {
      setLoading(false)
    }
  }

  return { loading, getUserCourses, userCourses }
}

export default useGetUserCourses