import React, { useState } from 'react'

const useGetUserTickets = () => {
  const [loading, setLoading] = useState(false)
  const [userTickets, setUserTickets] = useState([])

  const getUserTickets = async () => {
    setLoading(true)

    const res = await fetch('/api/ticket')
    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      return setUserTickets(data.tickets)
    }

    setLoading(false)
    setUserTickets([])
  }

  return { loading, userTickets, getUserTickets }
}

export default useGetUserTickets