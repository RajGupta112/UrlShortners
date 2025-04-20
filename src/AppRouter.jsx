import React from 'react'
import ShortenUrlPage from './components/ShortenUrlPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter;

export  const SubDomainRouter=()=>{
  return(
    <Routes>
        <Route path='/:url' element={<ShortenUrlPage/>} />
        
      </Routes>
  )
}


