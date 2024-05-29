import React, { useState } from 'react'

import AccountInfo from '../components/AccountInfo'
import MyCourses from '../components/MyCourses'
import MyQuestions from '../components/MyQuestions'
import MyTickets from '../components/MyTickets'

const UserPanel = () => {

  const [activeTab, setActiveTab] = useState('courses')

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-2  md:px-6">
      <div className="grid grid-cols-1 gap-2 relative lg:grid-cols-3">
        <aside className="h-max lg:sticky lg:top-0">
          <AccountInfo />
        </aside>
        <div className="lg:col-span-2">
          <div className="bg-base-200 p-4 rounded-box">
            <div role="tablist" className="tabs tabs-lifted tabs-lg">
              <a
                onClick={() => { setActiveTab('courses') }}
                role="tab"
                className={`tab text-xs md:text-xl [--tab-border-color:#374151] ${activeTab === 'courses' ? 'tab-active' : ''}`}>
                courses
              </a>
              <a
                onClick={() => { setActiveTab('questions') }}
                role="tab"
                className={`tab text-xs md:text-xl [--tab-border-color:#374151] ${activeTab === 'questions' ? 'tab-active' : ''}`}>
                questions
              </a>
              <a
                onClick={() => { setActiveTab('tickets') }}
                role="tab"
                className={`tab text-xs md:text-xl [--tab-border-color:#374151] ${activeTab === 'tickets' ? 'tab-active' : ''}`}>
                tickets
              </a>
            </div>
            <div className="p-4 bg-base-100 rounded-ee-lg rounded-es-lg border border-gray-700 border-t-0" id='lessons'>
              <span className="loading loading-bars loading-lg block mx-auto"></span>
              {activeTab === 'courses' && <MyCourses />}
              {activeTab === 'questions' && <MyQuestions />}
              {activeTab === 'tickets' && <MyTickets />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserPanel