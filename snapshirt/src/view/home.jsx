import React from 'react'
import Photogalerie from '../components/photogalerie'
import Products from '../components/products'
import Landingpage from '../components/landingpage'
import Testimonials from '../components/testimonials'

function Home() {
  return (
  <div>
    <section className='bg-[#FAFAFA] scroll-smooth '>
      <Landingpage />
      <Photogalerie />
      <Products />
      <Testimonials />

    </section>
    </div>
  )
}

export default Home