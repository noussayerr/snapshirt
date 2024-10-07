import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		number:{
			type:Number,
			required:true
		},
		Address:{
			type:String,
			required:true
		},
		Zip:{
			type:Number,
			required:true
		},
		Governorate:{
			type:String,
			required:true
		},
		furtherinformation:{
			type:String,
			required:true
		},
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				size:{
					type:String,
					default:"L"
				},
			},
		],
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		status:{
			type:String,
			enum: ["Loaded", "Picked UP","Canceled"],
			default: "Loaded",
		}
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;