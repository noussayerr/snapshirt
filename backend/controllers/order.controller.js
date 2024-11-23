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
    },
    getUserOrders: async (req, res) => {
        try {
            const userId = req.user._id.toString(); 
            const userOrders = await Order.find({ user: userId }).populate('products.product');
            console.log(userOrders)
            if (!userOrders || userOrders.length === 0) {
                return res.status(404).json({ message: "No orders found for this user." });
            }

            res.status(200).json({ success: true, orders: userOrders });
        } catch (error) {
            console.error("Error fetching user orders:", error);
            res.status(500).json({
                message: "Error fetching user orders",
                error: error.message,
            });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const { orderId } = req.params; // Order ID from the route params
            const userId = req.user._id; // Logged-in user's ID from the authentication middleware

            // Find the order by ID
            const order = await Order.findById(orderId);

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            // Check if the logged-in user is the owner of the order
            if (order.user.toString() !== userId.toString()) {
                return res.status(403).json({
                    message: "You are not authorized to delete this order.",
                });
            }

            // Delete the order
            await order.deleteOne();

            res.status(200).json({
                success: true,
                message: "Order deleted successfully.",
            });
        } catch (error) {
            console.error("Error deleting order:", error);
            res.status(500).json({
                message: "Error deleting order",
                error: error.message,
            });
        }
    },
}
export default order