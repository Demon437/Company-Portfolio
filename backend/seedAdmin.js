const mongoose = require("mongoose");
require("dotenv").config();

// Admin Schema
const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const existing = await Admin.findOne({ email: "admin@gmail.com" });

        if (existing) {
            console.log("Admin already exists");
            process.exit();
        }

        await Admin.create({
            email: "admin@gmail.com",
            password: "123456",
        });

        console.log("Admin created successfully ✅");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAdmin();