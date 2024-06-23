import React, { useState } from 'react'

const useGetUserQuestions = () => {
  const [userQuestions, setUserQuestions] = useState([])
  const [loading, setLoading] = useState(false)

  const getUserQuestions = async () => {
    setLoading(true)

    const res = await fetch('/api/question')
    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      return setUserQuestions(data.questions)
    }

    setLoading(false)
    setUserQuestions([])
  }

  return { loading, userQuestions, getUserQuestions }
}

export default useGetUserQuestions