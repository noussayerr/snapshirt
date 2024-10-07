import React from 'react'
import { Link } from 'react-router-dom';
import Carousel1 from '../components/carousel'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import FloatingShape from "../components/FloatingShape";
function Landingpage() {
  const text1 = "FIND TRENDY TSHIRTS".split(" ");
  const text3 = "OR CREATE YOUR OWN".split(" ");
  const text2 = "YOU'VE GOT THE IDEAS WE'VE GOT THE TOOLS".split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      >
      <FloatingShape color='bg-[#FF6D30]' size=' w-80 h-80' top='8%' left='15%' delay={0} />
      <FloatingShape color='bg-[#FF6D30]' size=' w-96 h-96' top='8%' left='15%' delay={0} className="blur-2xl" />
      <FloatingShape color='bg-[#FF6D30]' size=' w-80 h-80' top='10%' left='10%' delay={0} />
      
      <div className=" mx-auto max-w-screen-xl px-4 lg:h-full sm:px-6 lg:px-8">
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start items-center justify-center py-10 sm:py-40'>
          <div className="max-w-xl xl:text-left text-center">
            <div className="relative">
            
              <h1 className="text-4xl sm:text-6xl">
                {text1.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 2.0,
                      delay: i / 3
                    }}
                    >
                    {el}{" "}
                  </motion.span>
                ))}
                <strong className="block font-extrabold text-[#FF6D30]">
                  {text3.map((el, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 2.0,
                        delay: i / 3
                      }}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
                </strong>
              </h1>
              <p className="mt-4 max-w-lg text-xl sm:text-2xl/relaxed">
                {text2.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.50,
                      delay: i / 5
                    }}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </p>
              <div className="mt-8 flex sm:justify-center lg:justify-start gap-4 text-center">
                    <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type='submit'
                    className="block w-full rounded bg-[#FF6D30] sm:px-12 py-3 text-xl font-bold text-black shadow "
					          >
                  <Link to={"/shop"}>
                    Shop Now
                  </Link>
                
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type='submit'
                    className="block w-full rounded bg-black sm:px-12 py-3 text-xl font-bold text-white shadow"
					          >
                  <Link to={"/customize"}>
                  Start Design 
                  </Link>
                  </motion.button>
              </div>
            </div>
          </div>
          <Carousel1 />
        </div>
      </div>
    </motion.div>
  )
}

export default Landingpage
