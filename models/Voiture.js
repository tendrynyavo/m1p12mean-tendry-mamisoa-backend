const mongoose = require('mongoose');

// Facture Schema
const FactureSchema = new mongoose.Schema({
    dateFacture: { type: Date, required: true },
    status: { type: Number, required: true },
    pieces: [{
        libelle: { type: String, required: true },
        quantite: { type: Number, required: true },
        prixUnitaire: { type: Number, required: true },
        unite: { type: String, required: true }
    }]
}); 

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
        ref: 'Client',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Voiture', VoitureSchema);