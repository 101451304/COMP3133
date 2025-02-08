const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    city: {
        type: String,
        required: true,
        match: [/^[a-zA-Z\s]+$/, "City name can only contain letters and spaces"]
    },
    website: {
        type: String,
        required: true,
        match: [/^https?:\/\/[^\s$.?#].[^\s]*$/, "Invalid URL format"]
    },
    zip: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, "Invalid zip code format (must be DDDDD-DDDD)"]
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Invalid phone format (must be D-DDD-DDD-DDDD)"]
    }
});

module.exports = mongoose.model("User", userSchema);
