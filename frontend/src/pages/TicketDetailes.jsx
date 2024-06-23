import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TicketInfos from '../components/TicketInfos'
import TicketConversations from '../components/TicketConversations'
import toast from 'react-hot-toast'

const TicketDetailes = () => {

  const { id: ticketId } = useParams()
  const [loading, setLoading] = useState(false)
  const [ticket, setTicket] = useState(null)
  const [refetchTicket, setRefetchTicket] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getTicketDetailes(ticketId)
  }, [ticketId, refetchTicket])

  const getTicketDetailes = async (ticketId) => {
    setLoading(true)

    const res = await fetch(`/api/ticket/${ticketId}`)
    const data = await res.json()

    if (res.status === 200) {
      setLoading(false)
      return setTicket(data.ticket)
    }

    setLoading(false)
    setTicket(null)
    toast.error(data.msg)
    navigate('/panel')
  }

  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-2  md:px-6">
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        ticket &&
        <div className="grid grid-cols-1 gap-2 relative md:grid-cols-3">
          <aside className='h-max lg:sticky lg:top-0'>
            <TicketInfos ticket={ticket} />
          </aside>
          <div className='lg:col-span-2'>
            <TicketConversations ticket={ticket} refetch={setRefetchTicket} />
          </div>
        </div>
      }
    </section>
  )
}

export default TicketDetailes