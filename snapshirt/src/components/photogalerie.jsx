import React from 'react'
import image1 from '../assets/galerie/image1.jpg'
import image2 from '../assets/galerie/image2.jpg'
import image3 from '../assets/galerie/image3.jpg'
import image4 from '../assets/galerie/image4.jpg'
import image5 from '../assets/galerie/image5.jpg'
import image6 from '../assets/galerie/image6.jpg'
import image7 from '../assets/galerie/image7.jpg'
import image8 from '../assets/galerie/image8.jpg'
import image9 from '../assets/galerie/image9.jpg'

function Photogalerie() {
    return (
        <div className="p-4  ">
          <div className="flex gap-1 items-center mx-auto max-w-screen-2xl justify-center ">
            <img src={image9} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl hidden sm:block h-36 w-20 lg:h-40 lg:w-24 mr-1 lg:mr-4' alt="" />
            <img src={image2} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl hidden sm:block h-44 w-24 lg:h-52 lg:mr-4' alt="" />
            <div className='lg:w-40 lg:mr-4 items-center flex flex-col'>
                <img src={image3} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl h-48 w-20 lg:h-48 lg:w-40 mb-2' alt="" />
                <img src={image8} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl h-48 w-20 lg:h-48 lg:w-40' alt="" />
            </div>
            <div>
                <img src={image4} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl w-56 h-full lg:w-72' alt="" />
            </div>
            <div className='lg:w-40 lg:ml-4 items-center flex flex-col'>
                <img src={image6} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl h-48 w-20 lg:w-40 lg:h-48 mb-2' alt="" />
                <img src={image7} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl h-48 w-20 lg:w-40 lg:h-48' alt="" />
            </div>
            <img src={image1} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl hidden sm:block h-44 w-24 lg:h-52 lg:ml-4' alt="" />
            <img src={image5} className='duration-1000 lg:hover:scale-75 rounded-lg lg:rounded-xl hidden sm:block h-36 w-20 lg:h-40 lg:w-24 lg:ml-4' alt="" />
          </div>
        </div>
            //   <div key={image.id} className="flex justify-center">
            //     <img src={image.src} alt={image.alt} className="w-full h-auto" />
            //   </div>
      );
}

export default Photogalerie