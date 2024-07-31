const { default: mongoose } = require("mongoose")
require('dotenv').config();

url = process.env.MONGODB_URL;

const Connect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = Connect;