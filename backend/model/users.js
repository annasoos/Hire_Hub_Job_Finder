const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
    }
);

module.exports = mongoose.model("User", user);