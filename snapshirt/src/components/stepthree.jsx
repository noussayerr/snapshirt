import React from 'react'
import checkmark from '../assets/checkmark.png'
const StepThree = ({tshirt,color,size}) => {
  return(
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className="bg-[#f7f6f6] w-2/3 p-10 rounded-xl flex justify-center relative shadow-md">
        <img src={tshirt} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold">Your own t-shirt</p>
        <p className="w-80 text-2xl font-bold flex">
          <img src={checkmark} className='w-8' alt="" /> In Stock
        </p>
        <div className="flex justify-between mt-10">
          <div className="text-xl">
            <p className="font-semibold">Color</p>
            <div className="flex justify-start gap-2 px-2 ">
              <div
                className={`w-8 h-8 bg-[${color}] rounded-3xl cursor-pointer`}
                
              >

              </div>
            </div>
          </div>
          <div className="text-xl">
            <p className="font-semibold">Size</p>
            <div className="flex justify-start gap-2 px-2 ">
              <div className="w-12 h-8 bg-[#D9D9D9] rounded-3xl cursor-pointer font-bold flex items-center justify-center shadow-lg">{size}</div>
              
            </div>
          </div>
        </div>
        <div className='flex mt-20 justify-between'>
        <p className="text-center text-2xl font-bold">35 DT</p>
        <button className="px-4 py-2 w-52 rounded-xl text-xl border-2  border-[#FF6D30] text-black font-bold shadow-lg">Continue</button>
        </div>
      </div>
    </div>
  )
};

export default StepThree;
