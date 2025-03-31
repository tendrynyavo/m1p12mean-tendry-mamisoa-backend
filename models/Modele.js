const mongoose = require('mongoose');

const ModeleSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    annee: { type: Number, required: true },
    motorisations : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Motorisation' }]
}, { timestamps: true });

module.exports = mongoose.model('Modele', ModeleSchema);