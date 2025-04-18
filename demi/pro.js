const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    Price: Number,
    categorie:String
})
const productmodel = mongoose.model("Products", ProductSchema,
    "Products")
module.exports = productmodel