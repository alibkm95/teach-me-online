import React from 'react'

import paymentImg from '../assets/payment.svg'

const Payment = () => {
  return (
    <section className="w-full max-w-6xl min-h-screen mx-auto my-6 p-2">
      <div className="grid grid-cols-1 gap-4 place-items-center p-6 bg-base-200 rounded-box md:grid-cols-2">
        <div className="w-full bg-base-300 rounded-box">
          <img className='w-full block aspect-square' src={paymentImg} alt="payment image" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-bold text-center">
            The fake payment is ongoing, please wait ...
          </p>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    </section>
  )
}

export default Payment