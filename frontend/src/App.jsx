import { Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Recover from './pages/Recover'
import CourseDetailes from './pages/CourseDetailes'
import CourseContents from './pages/CourseContents'
import Ticket from './pages/Ticket'
import TicketDetailes from './pages/TicketDetailes'
import UserPanel from './pages/UserPanel'
import NotFound from './pages/NotFound'
import Payment from './pages/Payment'
import Articles from './pages/Articles'
import Article from './pages/Article'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/recover' element={<Recover />} />
        <Route path='/courseDetailes/:id' element={<CourseDetailes />} />
        <Route path='/courseContents/:id' element={<CourseContents />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/ticketDetailes/:id' element={<TicketDetailes />} />
        <Route path='/panel/:id' element={<UserPanel />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
