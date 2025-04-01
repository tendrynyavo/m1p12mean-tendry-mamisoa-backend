const Voiture = require('../models/Voiture');

// Create
async function createVoiture(voitureData) {
    try {
        const voiture = new Voiture(voitureData);
        return await voiture.save();
    } catch (error) {
        throw new Error(`Error creating voiture: ${error.message}`);
    }
}

// Read
async function getAllVoitures() {
    try {
        return await Voiture.find()
            .populate('motorisation')
            .populate('client');
    } catch (error) {
        throw new Error(`Error fetching voitures: ${error.message}`);
    }
}

async function getVoitureById(id) {
    try {
        const voiture = await Voiture.findById(id)
            .populate('motorisation')
            .populate('client');
        if (!voiture) {
            throw new Error('Voiture not found' );
        }
        return voiture;
    } catch (error) {
        throw new Error(`Error fetching voiture: ${error.message}`);
    }
}

// Update
async function updateVoiture(id, updateData) {
    try {
        const voiture = await Voiture.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        ).populate('motorisation')
         .populate('client');
        
        if (!voiture) {
            throw new Error('Voiture not found');
        }
        return voiture;
    } catch (error) {
        throw new Error(`Error updating voiture: ${error.message}`);
    }
}

// Delete
async function deleteVoiture(id) {
    try {
        const voiture = await Voiture.findByIdAndDelete(id);
        if (!voiture) {
            throw new Error('Voiture not found');
        }
        return voiture;
    } catch (error) {
        throw new Error(`Error deleting voiture: ${error.message}`);
    }
}

module.exports = {
    createVoiture,
    getAllVoitures,
    getVoitureById,
    updateVoiture,
    deleteVoiture
};