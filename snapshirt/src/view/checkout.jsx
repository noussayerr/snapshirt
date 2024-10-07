import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Checkout = () => {
	const [checkoutDetails, setCheckoutDetails] = useState({
		prefix: "+216",
		mobileNumber: "",
		address: "",
		furtherInformation: "",
		postalCode: "",
		governorate: "",
	});
	const navigate=useNavigate()
	const{user}=useAuthStore()
	const {clearCart,total}=useCartStore()
	const cartitems=user.cartItems
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/api/order", {
				cartitems,
				checkoutDetails,
				total
			});
			clearCart();
			navigate('/')
		} catch (error) {
			console.log(error);}
	};

	return (
		<motion.div
			className='bg-[#FAFAFA] shadow-xl rounded-lg p-8 mb-8 max-w-xl mx-auto mt-20'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<h2 className='text-2xl font-semibold mb-6 text-emerald-300'>Personal details</h2>
				<div className="flex gap-10">
					<div>
						<label htmlFor='prefix' className='block text-md font-medium text-black'>
							Prefix
						</label>
						<input
							type='text'
							id='prefix'
							name='prefix'
							value={checkoutDetails.prefix}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, prefix: e.target.value })}
							className='mt-1 block w-14 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='mobileNumber' className='block text-md font-medium text-black'>
							Mobile Number
						</label>
						<input
							type='text'
							id='mobileNumber'
							name='mobileNumber'
							value={checkoutDetails.mobileNumber}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, mobileNumber: e.target.value })}
							className='mt-1 block w-96 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
				</div>
				
				<h1 className='text-2xl font-semibold mb-6 text-emerald-300'>Delivery details :</h1>
				<div className="flex justify-between">
					<div>
						<label htmlFor='address' className='block text-md font-medium text-black'>
							Address
						</label>
						<input
							type='text'
							id='address'
							name='address'
							value={checkoutDetails.address}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, address: e.target.value })}
							className='mt-1 block w-56 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='furtherInformation' className='block text-md font-medium text-black'>
							Further Information
						</label>
						<input
							type='text'
							id='furtherInformation'
							name='furtherInformation'
							value={checkoutDetails.furtherInformation}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, furtherInformation: e.target.value })}
							className='mt-1 block w-56 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
				</div>

				<div className="flex justify-between">
					<div>
						<label htmlFor='postalCode' className='block text-md font-medium text-black'>
							Zip/Postal Code
						</label>
						<input
							type='text'
							id='postalCode'
							name='postalCode'
							value={checkoutDetails.postalCode}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, postalCode: e.target.value })}
							className='mt-1 block w-56 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
					<div>
						<label htmlFor='governorate' className='block text-md font-medium text-black'>
							Governorate
						</label>
						<input
							type='text'
							id='governorate'
							name='governorate'
							value={checkoutDetails.governorate}
							onChange={(e) => setCheckoutDetails({ ...checkoutDetails, governorate: e.target.value })}
							className='mt-1 block w-56 bg-[#EEF2F9] border-gray-600 rounded-md shadow-sm py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
							required
						/>
					</div>
				</div>

				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#ff6d30] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
				>
				Continue
				</button>
			</form>
		</motion.div>
	);
};

export default Checkout;
