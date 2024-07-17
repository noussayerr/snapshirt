import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";

function Carousel1() {
  return (
    <div className=' px-4 items-center gap-12 container mx-auto ' >

    <Carousel autoplayDelay={4000} autoplay={true} loop={true}  className="mx-auto items-center h-72 rounded-lg w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="m-auto rounded-xl object-center h-5/6 w-5/6 object-cover"
        />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className=" m-auto rounded-xl h-5/6 w-5/6 object-cover"
        />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="m-auto rounded-xl h-5/6 w-5/6 object-cover"
        />
    </Carousel>
        </div>
  )
}

export default Carousel1