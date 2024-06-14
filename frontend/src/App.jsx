import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

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

  const { authUser } = useAuthContext()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={authUser ? <UserPanel /> : <Login />} />
        <Route path='/signup' element={authUser ? <UserPanel /> : <Signup />} />
        <Route path='/recover' element={authUser ? <UserPanel /> : <Recover />} />
        <Route path='/courseDetailes/:id' element={<CourseDetailes />} />
        <Route path='/courseContents/:id' element={authUser ? <CourseContents /> : <Home />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/ticketDetailes/:id' element={authUser ? <TicketDetailes /> : <UserPanel />} />
        <Route path='/panel/:id' element={authUser ? <UserPanel /> : <Login />} />
        <Route path='/payment/:id' element={authUser ? <Payment /> : <Login />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
