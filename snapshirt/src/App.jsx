import React from 'react'
import Navbar from './components/navbar'
import Home from './view/home'
import Footer from './components/footer'
function App() {
  return (
    <div className='font-sans'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App