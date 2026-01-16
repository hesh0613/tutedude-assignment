const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error Connecting MongoDb ", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;