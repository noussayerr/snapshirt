import React from 'react'
import Carousel1 from '../components/carousel'

function Home() {
  return (
    <div>
<section className='bg-[#F9F9F9]'>
  
  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen justify-between  lg:px-8">
    <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
      
      <h1 className="text-4xl sm:text-6xl">
        Find Trendy Tshirts

        <strong className="block font-extrabold text-[#FF6D30]"> Or Create Your Own </strong>
      </h1>

      <p className="mt-4 max-w-lg text-xl sm:text-2xl/relaxed">
      YOU'VE GOT THE IDEAS WE'VE GOT THE TOOLS
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-[#FF6D30] px-12 py-3 text-lg font-medium text-black shadow hover:bg-[#df6e3e] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Shop Now
        </a>

        <a
          href="#"
          className="block w-full rounded bg-black px-12 py-3 text-lg font-medium text-white shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
          Start Design 
        </a>
      </div>
    </div>
      <Carousel1 />

  </div>
</section>
    </div>
  )
}

export default Home