import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/cart" : "/api/cart";
export const useCartStore = create((set, get) => ({
	cart: [],
	total: 0,
	subtotal: 0,
	getCartItems: async () => {
		try {
			const res = await axios.get(`${API_URL}`);
			set({ cart: res.data });
			get().calculateTotals();
		} catch (error) {
			set({ cart: [] });
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	clearCart: async () => {
		try {
			await axios.delete(`${API_URL}`);
			toast.success("Cart cleared");
			set({ cart: [] });
			get().calculateTotals();
		} catch (error) {
			toast.error(error.response.data.message || "An error occurred");
		}
		set({ cart: [], coupon: null, total: 0, subtotal: 0 });
	},
	addToCart: async (product) => {
		try {
			await axios.post(`${API_URL}`, { productId: product._id });
			toast.success("Product added to cart");

			set((prevState) => {
				const existingItem = prevState.cart.find((item) => item._id === product._id);
				const newCart = existingItem
					? prevState.cart.map((item) =>
							item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
					  )
					: [...prevState.cart, { ...product, quantity: 1 }];
				return { cart: newCart };
			});
			get().calculateTotals();
		} catch (error) {
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	removeFromCart: async (productId) => {
		await axios.delete(`${API_URL}`, { data: { productId } });
		set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productId) }));
		get().calculateTotals();
	},
	updateQuantity: async (productId, quantity) => {
		if (quantity === 0) {
			get().removeFromCart(productId);
			return;
		}

		await axios.put(`${API_URL}/${productId}`, { quantity });
		set((prevState) => ({
			cart: prevState.cart.map((item) => (item._id === productId ? { ...item, quantity } : item)),
		}));
		get().calculateTotals();
	},
	calculateTotals: () => {
		const { cart, coupon } = get();
		const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
		let total = subtotal+10;

		if (coupon) {
			const discount = subtotal * (coupon.discountPercentage / 100);
			total = subtotal - discount;
		}

		set({ subtotal, total });
	},
}));