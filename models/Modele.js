const mongoose = require('mongoose');

const ModeleSchema = new mongoose.Schema({
    title: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Modele', ModeleSchema);