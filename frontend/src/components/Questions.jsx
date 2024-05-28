import React from 'react'

import NewQuestion from './NewQuestion';
import Conversations from './Conversations'

import { BsPatchQuestionFill } from "react-icons/bs";

const Questions = () => {
  return (
    <div className='bg-base-200 p-4 rounded-box'>
      <p className="text-lg flex items-center gap-2 px-4 pb-2 border-b border-b-gray-700">
        <BsPatchQuestionFill className='text-2xl text-emerald-500' />
        Ask a question
      </p>
      <NewQuestion />
      <div className="divider"></div>
      <Conversations />
    </div>
  )
}

export default Questions