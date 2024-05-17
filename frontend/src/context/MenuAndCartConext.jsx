import { createContext, useState } from 'react';

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, isCartOpen, toggleCart }}>
      {children}
    </MenuContext.Provider>
  )
}
