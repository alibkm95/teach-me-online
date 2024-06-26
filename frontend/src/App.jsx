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
        <Route path='/login' element={authUser ? <Navigate to={`/panel`} /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to={`/panel`} /> : <Signup />} />
        <Route path='/recover' element={authUser ? <Navigate to={`/panel`} /> : <Recover />} />
        <Route path='/courseDetailes/:id' element={<CourseDetailes />} />
        <Route path='/courseContents/:id' element={<CourseContents />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/ticketDetailes/:id' element={<TicketDetailes />} />
        <Route path='/panel' element={authUser ? <UserPanel /> : <Navigate to='/login' />} />
        <Route path='/payment' element={authUser ? <Payment /> : <Navigate to='/login' />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster
        toastOptions={{ className: 'bg-base-100 text-base-content border border-base-content' }}
        position='top-left'
      />
    </>
  )
}

export default App
