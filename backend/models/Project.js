const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        shortDescription: String,
        category: String,
        year: String,
        image: String,
        tech: [String], // ✅ array
        liveLink: String,
        longDescription: String,
        result: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);