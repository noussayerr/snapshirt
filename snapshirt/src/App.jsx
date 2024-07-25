import React from 'react'
import Navbar from './components/navbar'
import Home from './view/home'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Customtshirt from './view/customtshirt'
function App() {
  return (
    <BrowserRouter>
    <div className='font-sans'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customize' element={<Customtshirt/>} />
          
       
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App