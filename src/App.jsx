import React, { useState, useEffect } from 'react'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route} from 'react-router-dom'
import Contactus from './pages/Contactus.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Service from './pages/Services.jsx'

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading or data fetch
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0d0d21]">
        {/* Tailwind Spinner */}
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact-us' element={<Contactus/>} />
    <Route path='/services' element={<Service/>} />
   </Routes>

   <Footer/>
       
    </>
  )
}

export default App
