import React from "react";
import tshirt2 from '../assets/tshirt2.png'
import tshirt3 from '../assets/tshirt3.png'
import tshirt4 from '../assets/tshirt4.png'
import tshirt5 from '../assets/tshirt5.png'
function Products() {
  return (
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
                      £24.00 GBP{" "}
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
                      £24.00 GBP{" "}
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
                      £24.00 GBP{" "}
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
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 text-center leading-8"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Products;
