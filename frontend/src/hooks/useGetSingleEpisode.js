import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useGetSingleEpisode = () => {
  const [loading, setLoading] = useState(false)
  const [episode, setEpisode] = useState(null)
  const navigate = useNavigate()

  const getSingleEpisode = async (episodeId) => {
    setLoading(true)

    try {
      const res = await fetch(`/api/courses/content/episode/${episodeId}`)
      if (!res.ok) throw new Error
      const data = await res.json()
      setEpisode(data.episode)
    } catch (error) {
      console.log('err')
      setEpisode(null)
      toast.error('error geting data!')
      navigate('/categories')
    } finally {
      setLoading(false)
    }
  }

  return { loading, getSingleEpisode, episode }
}

export default useGetSingleEpisode