const mongoose = require('mongoose');

// Facture Schema
const FactureSchema = new mongoose.Schema({
    date_facture: { type: Date, required: true },
    status: { type: Number, required: true },
    pieces: [{
        libelle: { type: String, required: true },
        quantite: { type: Number, required: true },
        prix_unitaire: { type: Number, required: true },
        unite: { type: String, required: true }
    }]
}); 

// Realisation Schema
const RealisationSchema = new mongoose.Schema({
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    reference: { type: String, required: true },
    status: { type: Number, required: true },
    equipe: [{
        nom: { type: String, required: true },
        prenom: { type: String, required: true }
    }],
    prestations: [PrestationSchema],
    facture: FactureSchema
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
    },
    realisations: [RealisationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Voiture', VoitureSchema);