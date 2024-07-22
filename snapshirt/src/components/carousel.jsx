import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import tshirt from '../assets/tshirt1.png'
import hoodie from '../assets/hoodie.png'
function Carousel1() {
  return (
    <div className=' px-4 lg:py-0 pt-36  ' >
      <Carousel autoplayDelay={5000} autoplay={true} loop={true}  className="mx-auto items-center h-96 rounded-lg w-96">
        <img
          src={tshirt}
          alt="image 1"
          className="duration-1000 xl:hover:scale-75 m-auto rounded-xl object-center h-5/6  object-cover"
          />
        <img
          src={hoodie}
          alt="image 2"
          className="duration-1000 xl:hover:scale-75 m-auto rounded-xl object-center h-5/6  object-cover"
          />
      </Carousel>
    </div>
  )
}

export default Carousel1