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
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage';
import CreateNewShorten from './Dashboard/CreateNewShorten';
import CreateNewShortenForLandingPage from './components/CreateNewShortenForLandingPage';



const AppRouter = () => {
  const hideHeaderFooter=location.pathname.startsWith("/s");
  return (
    <>
   
    {!hideHeaderFooter && <Navbar/>}
    <Toaster position='botton-center'/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/s/:url" element={<ShortenUrlPage />} />
        <Route path='/create-shorten' element={<CreateNewShortenForLandingPage/>}></Route>

        <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
        <Route path='/login' element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
        <Route path="/error" element={ <ErrorPage />} />
        <Route path='*' element={<ErrorPage message="We can't to find the page you're looking for"/>}></Route>
      </Routes>
      {!hideHeaderFooter && <Footer />}
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


