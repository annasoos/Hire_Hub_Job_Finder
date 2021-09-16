const mongoose = require('mongoose');

const job = new mongoose.Schema(
    {
        id: Number,
        position: String,
        company: String,
				featured: Boolean,
				level: String,
        location: String,
				tools: Array,
        description: String,
    }
);

module.exports = mongoose.model("Job", job);