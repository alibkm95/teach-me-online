import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [refetchCartItems, setRefetchCartItems] = useState(false)

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')) || [])
  }, [refetchCartItems])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addToCart = (course) => {
    const alreadyAdded = cartItems.find(item => {
      return item._id === course._id
    })

    if (alreadyAdded) {
      return toast.error('This course is already added to your shopping cart!')
    }

    const existingCartCourses = JSON.parse(localStorage.getItem('cart')) || []
    localStorage.setItem('cart', JSON.stringify([...existingCartCourses, course]))
    setRefetchCartItems(prev => !prev)
  }

  const removeCourseFromCart = (course) => {
    const existingCartCourses = JSON.parse(localStorage.getItem('cart'))
    const updatedCartCourses = existingCartCourses.filter(item => {
      return item._id !== course._id
    })
    localStorage.setItem('cart', JSON.stringify(updatedCartCourses))
    setRefetchCartItems(prev => !prev)
  }

  const rearrangeCarts = (userCourses) => {
    const existingCartCourses = JSON.parse(localStorage.getItem('cart')) || []

    if (existingCartCourses.length) {
      const updatedCartCourses = existingCartCourses.filter(course => {
        return !userCourses.find(userCourse => userCourse.course._id === course._id)
      })

      localStorage.setItem('cart', JSON.stringify(updatedCartCourses))
      setRefetchCartItems(prev => !prev)
    }
  }

  const clearCart = () => {
    localStorage.removeItem('cart')
    setRefetchCartItems(prev => !prev)
  }

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        isCartOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeCourseFromCart,
        rearrangeCarts,
        clearCart
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
