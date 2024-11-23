import React,{useRef} from "react";
import tshirt2 from '../assets/tshirt2.png'
import tshirt3 from '../assets/tshirt3.png'
import tshirt4 from '../assets/tshirt4.png'
import tshirt5 from '../assets/tshirt5.png'

import { motion, useInView } from 'framer-motion';
function Products() {
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

    <div className="bg-white mt-36">
      <section className=" relative w-full bg-gradient-to-r from-white to-[#FBD1C0]">
      <div className="w-0 h-0 border-r-[99vw] border-t-[690px] border-r-transparent border-[#F9F9F9] absolute"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:px-6  lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-black sm:text-3xl">
              Product Collection
            </h2>
          </header>
         
          <ul className=" mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            <li>
              <a href="#" className="group block overflow-hidden relative">
                <img
                  src={tshirt5}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                  />

                <div className="relative text-center text-lg">
                  <h3 className=" font-bold text-black group-hover:underline group-hover:underline-offset-4">
                    Basic Tshirt
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $50.00 {" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="group block overflow-hidden relative">
                <img
                  src={tshirt2}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                  />

                <div className="relative text-center text-lg">
                  <h3 className=" font-bold text-black group-hover:underline group-hover:underline-offset-4">
                    Basic Tshirt
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $50.00 {" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden relative">
                <img
                  src={tshirt3}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                  />

                <div className="relative text-center text-lg">
                  <h3 className=" font-bold text-black group-hover:underline group-hover:underline-offset-4">
                    Basic Tshirt
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $50.00 {" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden relative">
                <img
                  src={tshirt4}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                  />

                <div className="relative text-center text-lg">
                  <h3 className=" font-bold text-black group-hover:underline group-hover:underline-offset-4">
                    Basic Tshirt
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      $50.00 {" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </motion.div>
  );
}

export default Products;
