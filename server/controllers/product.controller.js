const ProductSchema =require("../models/products")
const cloudinary = require ('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

module.exports ={
    allProducts:async(req,res)=>{
        ProductSchema.find()
        .then(Products=>{res.json(Products)})
        .catch((err)=>res.json(err))
    },
    oneProduct:async (req,res)=>{
        ProductSchema.findOne({_id:req.params.Productid})
        .then(oneproduct=>{
            res.json(oneproduct)
        })
        .catch((err)=>res.json(err))
    },
    createProduct:async (req,res)=>{
        try {
            const { name,description, image } = req.body;
            const photoUrl = await cloudinary.uploader.upload(image);
            ProductSchema.create({
              name,
              description,
              photo: photoUrl.url,
            })
            res.status(200).json({ success: true });
          } 
        catch (err) {
            res.status(500).json({ success: false});
        }
    },
  }