const Marque = require('../models/Marque');

async function getMarques() {
    return await Marque.find();
}

async function createMarque(marqueData) {
    try {
        const newMarque = new Marque(marqueData);
        return await newMarque.save();
    } catch (error) {
        throw new Error(`Error creating marque: ${error.message}`);
    }
}

module.exports = {
    getMarques,
    createMarque
}