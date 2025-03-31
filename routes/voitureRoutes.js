const express = require('express');
const router = express.Router();
const {
    createVoiture,
    getAllVoitures,
    getVoitureById,
    updateVoiture,
    deleteVoiture
} = require('../service/voitureService');

// Create a new voiture
router.post('/', async (req, res) => {
    try {
        const voiture = await createVoiture(req.body);
        res.status(201).json(voiture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all voitures
router.get('/', async (req, res) => {
    try {
        const voitures = await getAllVoitures();
        res.status(200).json(voitures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get voiture by ID
router.get('/:id', async (req, res) => {
    try {
        const voiture = await getVoitureById(req.params.id);
        res.status(200).json(voiture);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Update voiture
router.put('/:id', async (req, res) => {
    try {
        const voiture = await updateVoiture(req.params.id, req.body);
        res.status(200).json(voiture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete voiture
router.delete('/:id', async (req, res) => {
    try {
        await deleteVoiture(req.params.id);
        res.status(200).json({ message: 'Voiture deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;