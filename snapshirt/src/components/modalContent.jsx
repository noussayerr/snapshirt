
import { useState,useEffect,useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "./input";
import { useAuthStore } from "../store/authStore";
export default function ModalContent({ onClose }) {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const modalRef = useRef(null);
	const { login, isLoading, error } = useAuthStore();
  
	const handleLogin = async (e) => {
    e.preventDefault();
		await login(email, password);
    onClose()
	};
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}   
      exit={{ opacity: 0, scale: 0.8 }}    
      transition={{ duration: 0.3 }}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
        <div ref={modalRef} className="relative w-full max-w-md p-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end pb-4">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <h2 className='text-3xl font-bold mb-6 text-center '>
              Welcome Back
            </h2>
            <form onSubmit={handleLogin} className="p-4">
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-3 px-4 bg-gradient-to-r bg-[#FF6D30] to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:bg-[#f37c49] hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}
					</motion.button>
					<div className='flex items-center mb-6'>
						<Link to='/forgot-password' onClick={onClose} className='text-md text-[#FF6D30] hover:underline'>
							Forgot password?
						</Link>
					</div>
				</form>
        <div className='px-8 py-4 bg-[#FF6D30] bg-opacity-90 flex justify-center'>
				<p className='text-md text-white'>
					Don't have an account?{" "}
					<Link to='/signup' onClick={onClose} className='text-black hover:underline'>
						Sign up
					</Link>
				</p>
			  </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
