import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../context/MenuAndCartConext'

const useInvoice = () => {
  const { cartItems } = useContext(MenuContext)
  const [subTotal, setSubToatal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let subTotalPrice = 0
    cartItems.map(item => {
      subTotalPrice += item.price
    })
    setSubToatal(roundNumber(subTotalPrice))
    let taxPrice = subTotalPrice * 0.1
    setTax(roundNumber(taxPrice))
    setDiscount(0)
    let totalPrice = (subTotalPrice + taxPrice) - discount
    setTotal(roundNumber(totalPrice))
  }, [cartItems])

  const roundNumber = (num) => {
    if (Number.isInteger(num)) {
      return num
    } else {
      const decimalPlaces = num.toString().split('.')[1].length
      if (decimalPlaces <= 2) {
        return num
      } else {
        return Math.floor(num * 100) / 100
      }
    }
  }

  return { subTotal, discount, tax, total }
}

export default useInvoice