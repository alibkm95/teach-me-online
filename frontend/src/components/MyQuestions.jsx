import React, { useEffect, useState } from 'react'

import QuestionBoxSM from './QuestionBoxSM'
import useGetUserQuestions from '../hooks/useGetUserQuestions'

const MyQuestions = () => {

  const { loading, userQuestions, getUserQuestions } = useGetUserQuestions()

  useEffect(() => {
    getUserQuestions()
  }, [])

  return (
    <>
      {
        loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      <div className='grid gap-2 place-items-center md:grid-cols-2'>
        {
          userQuestions.length > 0 &&
          userQuestions.map(question => (<QuestionBoxSM key={question._id} q={question} />))
        }
      </div>
      {
        !loading &&
        userQuestions.length === 0 &&
        <div role="alert" className="alert bg-base-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" stroke='orange' strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>No question found! your asked questions will appear here.</span>
        </div>
      }
    </>
  )
}

export default MyQuestions