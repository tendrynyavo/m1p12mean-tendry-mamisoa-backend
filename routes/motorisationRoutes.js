const express = require('express');
const router = express.Router();
const {
    createMotorisation,
    getAllMotorisations,
    getMotorisationById,
    updateMotorisation,
    deleteMotorisation
} = require('../service/motorisationService');

// Create motorisation
router.post('/', async (req, res) => {
    try {
        const motorisation = await createMotorisation(req.body);
        res.status(201).json(motorisation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all motorisations
router.get('/', async (req, res) => {
    try {
        const motorisations = await getAllMotorisations();
        res.status(200).json(motorisations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get motorisation by ID
router.get('/:id', async (req, res) => {
    try {
        const motorisation = await getMotorisationById(req.params.id);
        res.status(200).json(motorisation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Update motorisation
router.put('/:id', async (req, res) => {
    try {
        const motorisation = await updateMotorisation(req.params.id, req.body);
        res.status(200).json(motorisation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete motorisation
router.delete('/:id', async (req, res) => {
    try {
        await deleteMotorisation(req.params.id);
        res.status(200).json({ message: 'Motorisation deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;