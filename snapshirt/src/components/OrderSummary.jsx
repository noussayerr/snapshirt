import React from "react";
import { Link } from "react-router-dom";


const OrderSummary = ({total,subtotal}) => {
	return(
		<div className="bg-[#EEF2F9] dark:bg-slate-800 rounded-xl flex flex-col gap-6 p-4 md:p-6">
		<div className="">
			<h6 className="font-medium mb-6 opacity-75">Order Summary</h6>

			<div className="flex justify-between items-center">
				<span>Sub total</span>
				<span className="font-bold">{subtotal} DT</span>
			</div>
			<hr className="my-4 dark:border-slate-700" />
			<div className="flex justify-between items-center">
				<span>Shipping Fee</span>
				<span className="font-bold">10 DT</span>
			</div>
			<hr className="my-4 dark:border-slate-700" />
			<div className="flex justify-between items-center">
				<span className="fs-5 font-bold">Total</span>
				<span className="font-bold">{total} DT</span>
			</div>
		</div>
		<div className="">
			<Link to={'/checkout'}>
				<button className="w-full bg-[#FF6D3D] rounded-md text-white hover:bg-opacity-90 py-2.5">
					BUY 
				</button>
			</Link>
		</div>
	</div>
	);
};
export default OrderSummary