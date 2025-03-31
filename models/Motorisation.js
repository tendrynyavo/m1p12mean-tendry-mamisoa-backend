const mongoose = require('mongoose');
const { Schema } = mongoose;

const MotorisationSchema = new Schema({
    nom: { type: String, required: true },
    type: { type: String, required: true },
    modele: { type: Schema.Types.ObjectId, ref: 'Modele', required: true },
});

module.exports = mongoose.model('Motorisation', MotorisationSchema);