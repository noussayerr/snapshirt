import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col items-center justify-center m-10'
		>
			<div className='p-8'>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit} className="w-96 bg-[#ffffff] shadow-lg p-4 rounded-md">
                        <h2 className='text-3xl font-bold mb-6 text-center'>
                            Forgot Password
                        </h2>
						<p className='text-black mb-6 text-center'>
							Enter your email address and we'll send you a link to reset your password.
						</p>
						<Input
							icon={Mail}
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full py-3 px-4 mt-4 bg-gradient-to-r bg-[#FF6D30] to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:bg-[#f37c49] hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
							type='submit'
						>
							{isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Send Reset Link"}
						</motion.button>
					</form>
				) : (
					<div className='text-center'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
							className='w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mx-auto mb-4'
						>
							<Mail className='h-8 w-8 text-white' />
						</motion.div>
						<p className='text-black mb-6'>
							If an account exists for {email}, you will receive a password reset link shortly.
						</p>
					</div>
				)}
			<div className='px-8 py-4 bg-[#FF6D30] bg-opacity-90 flex justify-center'>
				<Link to={"/login"} className='text-sm text-white hover:underline flex items-center'>
					<ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
				</Link>
			</div>
			</div>

		</motion.div>
	);
};
export default ForgotPasswordPage;