const mongoose = require("mongoose");
const Product = require('../model/product')
const url = "mongodb+srv://cse21052:YdZ73Ci4fNF29uFM@sagar.nnedcbx.mongodb.net/MERN?retryWrites=true&w=majority&appName=Sagar";

const removeDuplicates = async () => {
    try {

        const duplicates = await Product.aggregate([
            {
                $group: {
                    _id: { name: "$name", company: "$company" },
                    count: { $sum: 1 },
                    ids: { $push: "$_id" }
                }
            },
            {
                $match: {
                    count: { $gt: 1 }
                }
            }
        ]);

        for (const duplicate of duplicates) {
            // Keep the first occurrence and delete the rest
            const idsToDelete = duplicate.ids.slice(1);
            await Product.deleteMany({ _id: { $in: idsToDelete } });
        }

        console.log("Duplicate products removed successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error removing duplicates:", error.message);
        mongoose.connection.close();
    }
};
module.exports = removeDuplicates

