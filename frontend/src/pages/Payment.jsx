import React, { useContext, useEffect, useState } from 'react'

import { MenuContext } from '../context/MenuAndCartConext'
import paymentImg from '../assets/payment.svg'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Payment = () => {

  const { cartItems, clearCart } = useContext(MenuContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (cartItems.length) {
      const requestedCourses = cartItems.map(course => course._id)
      subscribeToCourses(requestedCourses)
    }
  }, [])

  const subscribeToCourses = async (coursesArr) => {
    setLoading(true)

    const res = await fetch('/api/courses/subscribe', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidateCourses: coursesArr })
    })

    const data = await res.json()

    if (res.status === 201) {
      setLoading(false)
      toast.success(data.msg)
      clearCart()
      return navigate('/panel')
    }

    setLoading(false)
    toast.error('opration failed try again later!')
    navigate('/categories')
  }

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
          {
            loading && <span className="loading loading-spinner loading-lg"></span>
          }
        </div>
      </div>
    </section>
  )
}

export default Payment