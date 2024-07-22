import React, { useState } from 'react';
import tshirt from '../assets/tshirt.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <div>
      <header className="bg-white border-b-2">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <div className='pt-2 flex flex-col items-center'>
              <img src={tshirt} className='rounded-2xl overflow-hidden w-10 h-10' alt="T-shirt logo" />
              <p className='text-xl font-bold'>Snapshirt</p>
            </div>
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 font-bold text-xl text-black">
                <li>
                  <a className="transition hover:text-gray-500/75 text-[#ff6d30]" href=""> Home </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-500/75" href=""> Shop </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-500/75" href=""> Contact </a>
                </li>
                <li>
                  <a className="transition hover:text-gray-500/75" href=""> Customize product </a>
                </li>
              </ul>
            </nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className=" space-y-2"
                onClick={() => {setIsNavOpen((prev) => !prev)}}
              >
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>

                <ul className="flex flex-col items-center gap-6 font-bold text-md text-black min-h-[250px]">
                  <li>
                    <a className="transition hover:text-gray-500/75" href=""> Home </a>
                  </li>
                  <li>
                    <a className="transition hover:text-gray-500/75" href=""> Shop </a>
                  </li>
                  <li>
                    <a className="transition hover:text-gray-500/75" href=""> Contact </a>
                  </li>
                  <li>
                    <a className="transition hover:text-gray-500/75" href=""> Customize product </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Navbar;