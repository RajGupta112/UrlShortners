import React from 'react'
import ShortenUrlPage from './components/ShortenUrlPage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import LandingPage  from './components/LandingPage'
import AboutPage  from './components/AboutPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import DashboardLayout from './Dashboard/DashboardLayout'
import Footer  from './components/Footer'
import { Toaster } from 'react-hot-toast';



const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Toaster position='botton-center'/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
       
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
      </Routes>
      <Footer/>
      </>
  )
}

export default AppRouter;

export  const SubDomainRouter=()=>{
  return(
    <Routes>
        <Route path='/s/:url' element={<ShortenUrlPage/>} />
        
      </Routes>
  )
}


