import React, { useEffect, useState } from 'react'

import NewQuestion from './NewQuestion';
import MessageContainer from './MessageContainer';

import { BsPatchQuestionFill } from "react-icons/bs";
import useGetEpisodeQuestions from '../hooks/useGetEpisodeQuestions';

const Questions = ({ episodeId }) => {

  const { loading, getQuestions, question } = useGetEpisodeQuestions()
  const [refetchQuestions, setRefetchQuestions] = useState(false)

  useEffect(() => {
    getQuestions(episodeId)
  }, [episodeId, refetchQuestions])

  return (
    <div className='bg-base-200 p-4 rounded-box'>
      <p className="text-lg flex items-center gap-2 px-4 pb-2 border-b border-b-gray-700">
        <BsPatchQuestionFill className='text-2xl text-emerald-500' />
        Ask a question
      </p>
      <NewQuestion />
      <div className="divider"></div>
      {
        loading &&
        <span className="loading loading-bars loading-lg block mx-auto"></span>
      }
      {
        question &&
        <MessageContainer question={question} />
      }
      {
        !loading &&
        !question &&
        <div role="alert" className="alert bg-base-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" stroke='orange' strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>No question found! Ask your first question.</span>
        </div>
      }
    </div>
  )
}

export default Questions