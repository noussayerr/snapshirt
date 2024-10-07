import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import OrderSummary from "../components/OrderSummary";
import Cartitem from "../components/CartItem"
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
const Cart = () => {
	const { cart,subtotal,total} = useCartStore();
	return (
		<motion.div
						className='mx-auto w-full flex-none lg:max-w-4xl xl:max-w-6xl'
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
			<section className="ezy__epcart2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">

					{cart.length === 0 ? (
							<motion.div
							className='flex flex-col items-center justify-center space-y-4 py-16'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							>
							<ShoppingCart className='h-24 w-24 text-gray-300' />
							<h3 className='text-2xl font-semibold '>Your cart is empty</h3>
							<p className='text-gray-400'>Looks like you {"haven't"} added anything to your cart yet.</p>
							<Link
								className='mt-4 rounded-md bg-emerald-500 px-6 py-2 text-white transition-colors hover:bg-emerald-600'
								to='/'
							>
								Start Shopping
							</Link>
						</motion.div>
						) : (
								<div className="container px-4 mx-auto">
									<div className="flex flex-col lg:flex-row gap-6">
										<div className="bg-[#FAFAFA] shadow-lg dark:bg-slate-800 rounded-xl w-full lg:w-2/3">
										<div>
											{cart.map((item) => (
												<Cartitem key={item._id} item={item} />
											))}
										</div>
										</div>
										<div className="w-full lg:w-1/3">
											<OrderSummary total={total} subtotal={subtotal} />
										</div>
									</div>
								</div>
							
						)}
			</section>
	</motion.div>
	);
};

export default Cart
