import Order from "../models/order.model.js";


const order={
    checkoutSuccess : async (req, res) => {
        try {
                const {checkoutDetails,cartitems,total}=req.body
                const newOrder = new Order({
                    user: req.user._id,
                    number:checkoutDetails.mobileNumber,
                    Address:checkoutDetails.address,
                    Zip:checkoutDetails.postalCode,
                    Governorate:checkoutDetails.governorate,
                    furtherinformation:checkoutDetails.furtherInformation,
                    products: cartitems.map((product) => ({
                        product: product._id,
                        quantity: product.quantity,
                        size:product.size
                    })),
                    totalAmount: total ,
                });
    
                await newOrder.save();
    
                res.status(200).json({
                    success: true,
                    message: "Payment successful, order created, and coupon deactivated if used.",
                    orderId: newOrder._id,
                });
            
        } catch (error) {
            console.error("Error processing successful checkout:", error);
            res.status(500).json({ message: "Error processing successful checkout", error: error.message });
        }
    },
    getallorders:async (req, res) => {
        try {
            const Orders = await Order.find({});
            res.json({ Orders });   
        } catch (error) {
            console.error("Error in getAllorders controller:", error);
            res.status(500).json({ message: "Error processing successful checkout", error: error.message });
        }
    },
    updateOrderStatus: async (req, res) => {
        try {
            const { orderId } = req.params;
            const { status } = req.body;
            const updatedOrder = await Order.findByIdAndUpdate(
                orderId,
                { status },
                { new: true }
            );

            if (!updatedOrder) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.json({ message: "Order status updated successfully", order: updatedOrder });
        } catch (error) {
            console.error("Error updating order status:", error);
            res.status(500).json({ message: "Error updating order status", error: error.message });
        }
    }
}
export default order