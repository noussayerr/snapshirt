import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Formportal from './formportal';
import tshirt from '../assets/tshirt.png';
import { ShoppingCart } from 'lucide-react';
import Usericon from '../assets/usericon';
import { useAuthStore } from '../store/authStore';
import { Sparkles } from 'lucide-react';
import { useCartStore } from "../store/useCartStore";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const { cart } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const linkClasses = (path) => {
    return path === activeLink ? 'text-[#ff6d30] text-xl font-bold flex ' : 'transition hover:text-gray-500/75 text-xl font-bold flex text-black';
  };

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);  // Scrolling down, hide navbar
    } else {
      setShowNavbar(true);   // Scrolling up, show navbar
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header className={`bg-white border-b-2 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} fixed w-full z-20`}>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <div className='pt-2 flex flex-col items-center'>
              <img src={tshirt} className='rounded-2xl overflow-hidden w-10 h-10' alt="T-shirt logo" />
              <p className='text-xl font-bold'>Snapshirt</p>
            </div>
            <div className='flex gap-20'>
              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-6 ">
                  <li>
                    <Link to="/" className={linkClasses('/')}>Home</Link>
                  </li>
                  <li>
                    <Link to="/shop" className={linkClasses('/shop')}>Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/customize" className={linkClasses('/customize')}>Customize product</Link>
                  </li>
                </ul>
              </nav>
              <ul className='flex gap-6'>
                <li className="relative">
                  <span className='absolute -top-2 -right-3 bg-[#ff6d30] text-white rounded-full px-2 text-sm group-hover:bg-emerald-400'>
                    {cart.length}
                  </span>
                  <Link to={'/cart'}>
                    <ShoppingCart className={linkClasses('/cart')} />
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    user.role === "admin" ? (
                      <Link to={'/Dashboard'}>
                        <p className={linkClasses('/Dashboard')}>Dashboard <Sparkles className={linkClasses('/Dashboard')} /></p>
                      </Link>
                    ) : (
                      <Link to={'/profile'}>
                        <Usericon />
                      </Link>
                    )
                  ) : (
                    <Formportal />
                  )}
                </li>
              </ul>
            </div>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="space-y-2"
                onClick={() => setIsNavOpen(true)}
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
                    <Link to="/" className={linkClasses('/')}>Home</Link>
                  </li>
                  <li>
                    <Link to="/shop" className={linkClasses('/shop')}>Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/customize" className={linkClasses('/customize')}>Customize product</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* This padding makes sure the content below has space for the navbar */}
      <div className="pt-20">
        {/* Main content goes here */}
      </div>

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
  );
}

export default Navbar;
