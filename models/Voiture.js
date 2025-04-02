const mongoose = require('mongoose');

// Main Voiture Schema
const VoitureSchema = new mongoose.Schema({
    immatricule: {
        type: String,
        required: true,
        unique: true
    },
    motorisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Motorisation',
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Voiture', VoitureSchema);