const mongoose = require("mongoose");

const main = async () => {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
    })
    const productModel = mongoose.model("Products", productSchema,"Products");


    let data = new productModel({
        name: "real beauty",
        price: 12000,
    });
    let result = await data.save()
    console.log(result)

};
main();