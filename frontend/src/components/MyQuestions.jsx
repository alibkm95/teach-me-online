import React from 'react'

import QuestionBoxSM from './QuestionBoxSM'

const MyQuestions = () => {
  return (
    <div className='grid gap-2 place-items-center md:grid-cols-2'>
      <QuestionBoxSM />
      <QuestionBoxSM />
      <QuestionBoxSM />
      <QuestionBoxSM />
      <QuestionBoxSM />
      <QuestionBoxSM />
    </div>
  )
}

export default MyQuestions