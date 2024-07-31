const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
        trim: true
    },
    price : {
        type:Number,
        required:true,
        default:10
    },
    description: {
        type: String,
        trim : true
    },
    company:{
        type:String,
        enum : {
            values : ["apple", "samsung", "dell", "mi"],
            message : `{VALUE} is not supported`
        },
        trim:true,
    },
    createdAt : {
        type:Date,
        default:Date.now(),
    },
    rating:{
        type:Number,
        default:4.9
    },
    feature:{
    type:String,
      default:false
    }

})
const Product = mongoose.model("Product", productSchema);
module.exports = Product