const mongoose = require('mongoose');
const UserAuth = require('./UserAuth');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);