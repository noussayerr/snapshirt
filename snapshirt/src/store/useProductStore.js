import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/products" : "/api/products";

export const useProductStore = create((set) => ({
	products: [],
	loading: false,

	setProducts: (products) => set({ products }),
	createProduct: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post(`${API_URL}`, productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
			}));
			toast.success("Product created")
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get(`${API_URL}`);
			set({ products: response.data.products, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`${API_URL}/${productId}`);
			set((prevProducts) => ({
				products: prevProducts.products.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete product");
		}
	},
	toggleFeaturedProduct: async (productId) => {
		set({ loading: true });
		try {
			const response = await axios.patch(`${API_URL}/${productId}`);
			// this will update the isFeatured prop of the product
			set((prevProducts) => ({
				products: prevProducts.products.map((product) =>
					product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to update product");
		}
	},
	fetchFeaturedProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get(`${API_URL}/featured`);
			set({ products: response.data, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			console.log("Error fetching featured products:", error);
		}
	},
}));