import { motion } from "framer-motion";
import Input from "../components/input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className=' flex flex-col items-center justify-center m-10 '>
			<div className=''>

				<form onSubmit={handleSignUp} className="w-96 bg-[#ffffff] shadow-lg p-4 rounded-md">
				<h2 className='text-3xl font-bold mb-6 text-center'>
					Create Account
				</h2>
					<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className='w-full py-3 px-4 mt-4 bg-gradient-to-r bg-[#FF6D30] to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:bg-[#f37c49] hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
					</motion.button>
				</form>
			<div className='px-8 py-4 bg-[#FF6D30] bg-opacity-90 flex justify-center'>
				<p className='text-sm text-white'>
					Already have an account?{" "}
					<Link to={"/login"} className='text-black hover:underline'>
						Login
					</Link>
				</p>
			</div>
			</div>
		</motion.div>
	);
};
export default SignUpPage;