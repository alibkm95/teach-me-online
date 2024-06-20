import React, { useState } from 'react'

const useGetEpisodeQuestions = () => {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState(null)

  const getQuestions = async (episodeId) => {
    setLoading(true)

    try {
      const res = await fetch(`/api/question/episode/${episodeId}`)
      if (!res.ok) throw new Error
      const data = await res.json()
      setQuestion(data.question)
    } catch (error) {
      setQuestion(null)
    } finally {
      setLoading(false)
    }
  }

  return { loading, getQuestions, question }
}

export default useGetEpisodeQuestions