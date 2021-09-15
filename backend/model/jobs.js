const mongoose = require('mongoose');

const job = new mongoose.Schema(
    {
        id: String,
        title: String,
        company: String,
				featured: Boolean,
				position: String,
				level: String,
        location: String,
        description: String,
    }
);

module.exports = mongoose.model("Job", job);