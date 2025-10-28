import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route} from 'react-router-dom'
import Contactus from './pages/Contactus.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Service from './pages/Services.jsx'

function App() {

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
