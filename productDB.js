const mongoose = require("mongoose");
const Product = require("./model/product");
const connectDB = require("./db/Connect");
const products = require("./product.json");

const url = "mongodb+srv://cse21052:YdZ73Ci4fNF29uFM@sagar.nnedcbx.mongodb.net/MERN?retryWrites=true&w=majority&appName=Sagar";

const insert = async () => {
    try {
        await connectDB(url);
        await Product.insertMany(products);
        console.log("Products inserted successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

