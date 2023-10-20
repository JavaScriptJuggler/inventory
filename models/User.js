const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "phone_number": Number,
    "role": Number
})

const User = mongoose.model("users", userSchema);
module.exports = {
    User,
};