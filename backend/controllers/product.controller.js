import Product from "../models/product.model.js"
import {User} from '../models/user.model.js'
import cloudinary from"cloudinary"
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const product={
    getAllProducts : async (req, res) => {
        try {
            const products = await Product.find({});
            res.json({ products });
        } catch (error) {
            console.log("Error in getAllProducts controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    getFeaturedProducts : async (req, res) => {
        try {
            
            featuredProducts = await Product.find({ isFeatured: true }).lean();
    
            if (!featuredProducts) {
                return res.status(404).json({ message: "No featured products found" });
            }
        } catch (error) {
            console.log("Error in getFeaturedProducts controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    createProduct : async (req, res) => {
        try {
            const { name, description, price, image } = req.body;
    
            let photoUrl = null;
    
            if (image) {
                photoUrl = await cloudinary.uploader.upload(image, { folder: "products" });
            }
            const user = await User.findById(req.user._id).select("-password");
            const product = await Product.create({
                name,
                description,
                price,
                image: photoUrl?.secure_url ? photoUrl.secure_url : "",
                productType: user.role=="admin" ? "Product" : "CustomTshirt",
            });
            res.status(201).json(product);
        } catch (error) {
            console.log("Error in createProduct controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    deleteProduct : async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
    
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
            if (product.image) {
                const publicId = product.image.split("/").pop().split(".")[0];
                try {
                    await cloudinary.uploader.destroy(`products/${publicId}`);
                    console.log("deleted image from cloduinary");
                } catch (error) {
                    console.log("error deleting image from cloduinary", error);
                }
            }
            await Product.findByIdAndDelete(req.params.id);
            await User.updateMany(
                { "cartItems._id": req.params.id }, 
                { $pull: { cartItems: { _id: req.params.id } } }
            );
    
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            console.log("Error in deleteProduct controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    toggleFeaturedProduct : async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
                product.isFeatured = !product.isFeatured;
                const updatedProduct = await Product.findByIdAndUpdate(
                    req.params.id,
                    { $set: { isFeatured: product.isFeatured } }, // Or toggle using `$set` with a dynamic value
                    { new: true, runValidators: true } // Return the updated document and validate only the updated fields
                );
                res.json(updatedProduct);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            console.log("Error in toggleFeaturedProduct controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    },
    getProductById : async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            console.log("Error in getProductById controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }
}

export default product