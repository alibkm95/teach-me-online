import React from 'react'

import TicketInfos from '../components/TicketInfos'
import TicketConversations from '../components/TicketConversations'

const TicketDetailes = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-2  md:px-6">
      <div className="grid grid-cols-1 gap-2 relative md:grid-cols-3">
        <aside className='h-max lg:sticky lg:top-0'>
          <TicketInfos />
        </aside>
        <div className='lg:col-span-2'>
          <TicketConversations />
        </div>
      </div>
    </section>
  )
}

export default TicketDetailes