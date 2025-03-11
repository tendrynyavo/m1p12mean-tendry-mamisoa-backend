const mongoose = require('mongoose');

const UserAuthSchema = new mongoose.Schema({
    name: { type: String, required: true },
    authorization: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserAuth', UserAuthSchema);    