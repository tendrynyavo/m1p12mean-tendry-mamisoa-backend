const Marque = require('../models/Marque');

// Create
async function createMarque(marqueData) {
    try {
        const newMarque = new Marque(marqueData);
        return await newMarque.save();
    } catch (error) {
        throw new Error(`Error creating marque: ${error.message}`);
    }
}

// Read
async function getMarques() {
    try {
        return await Marque.find()
            .populate({
                path: 'modeles',
                populate: {
                    path: 'motorisations'
                }
            });
    } catch (error) {
        throw new Error(`Error fetching marques: ${error.message}`);
    }
}

async function getMarqueById(id) {
    try {
        const marque = await Marque.findById(id)
            .populate({
                path: 'modeles',
                populate: {
                    path: 'motorisations'
                }
            });
        if (!marque) {
            throw new Error('Marque not found');
        }
        return marque;
    } catch (error) {
        throw new Error(`Error fetching marque: ${error.message}`);
    }
}

// Update
async function updateMarque(id, updateData) {
    try {
        const marque = await Marque.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        ).populate({
            path: 'modeles',
            populate: {
                path: 'motorisations'
            }
        });
        
        if (!marque) {
            throw new Error('Marque not found');
        }
        return marque;
    } catch (error) {
        throw new Error(`Error updating marque: ${error.message}`);
    }
}

// Delete
async function deleteMarque(id) {
    try {
        const marque = await Marque.findByIdAndDelete(id);
        if (!marque) {
            throw new Error('Marque not found');
        }
        return marque;
    } catch (error) {
        throw new Error(`Error deleting marque: ${error.message}`);
    }
}

module.exports = {
    createMarque,
    getMarques,
    getMarqueById,
    updateMarque,
    deleteMarque
};