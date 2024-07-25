import React from 'react'
import Carousel1 from '../components/carousel'
function Landingpage() {
  return (
    <div className=" mx-auto max-w-screen-xl px-4  lg:h-full sm:px-6 lg:px-8"> 
        <div className=' flex flex-col lg:flex-row lg:justify-between lg:items-start items-center justify-center py-40'>
            <div className="max-w-xl xl:text-left  text-center">
                <div className="relative ">
                    <div className="absolute top-0 -left-10 w-52 md:w-72 h-72 bg-[#FBD1C0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-2 w-52 md:w-72 h-72 bg-[#FBD1C0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-10 w-52 md:w-72 h-72 bg-[#FBD1C0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <h1 className="text-4xl sm:text-6xl">
                        FIND TRENDY TSHIRTS
                        <strong className="block font-extrabold text-[#FF6D30]"> OR CREATE YOUR OWN </strong>
                    </h1>
                    <p className="mt-4 max-w-lg text-xl sm:text-2xl/relaxed">
                        YOU'VE GOT THE IDEAS WE'VE GOT THE TOOLS
                    </p>
                    <div className="mt-8 flex sm:justify-center lg:justify-start gap-4 text-center ">
                        <a href="#" className="block w-full rounded bg-[#FF6D30] sm:px-12 py-3 text-xl font-medium text-black shadow hover:bg-[#df6e3e] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Shop Now
                        </a>
                        <a href="#"className="block w-full rounded bg-black sm:px-12 py-3 text-xl font-medium text-white shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                            Start Design 
                        </a>
                    </div>
                </div>
            </div>
            <Carousel1 />
        </div>
    </div>
  )
}

export default Landingpage