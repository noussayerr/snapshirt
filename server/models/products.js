const mongoose= require ('mongoose');

const Product = new mongoose.Schema({
  productname: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
});

const ProductSchema = mongoose.model('Post', Product);

module.exports=ProductSchema