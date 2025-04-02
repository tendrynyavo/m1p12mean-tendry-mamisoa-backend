const express = require('express');
const router = express.Router();
const {
    Realisations,
    getRealisationById,
    RealisationsByMecanicien,
    createRealisation,
    updateRealisation,
    deleteRealisation
} = require('../service/realisationService');

// GET all realisations
router.get('/', async (req, res) => {
    try {
        const realisations = await Realisations();
        res.status(200).json(realisations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/mecanicien/:id', async (req, res) => {
    try {
        const realisations = await RealisationsByMecanicien(req.params.id);
        res.status(200).json(realisations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// GET realisation by id
router.get('/:id', async (req, res) => {
    try {
        const realisation = await getRealisationById(req.params.id);
        res.status(200).json(realisation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// POST create new realisation
router.post('/', async (req, res) => {
    try {
        const newRealisation = await createRealisation(req.body);
        res.status(201).json(newRealisation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update realisation
router.put('/:id', async (req, res) => {
    try {
        const updatedRealisation = await updateRealisation(req.params.id, req.body);
        res.status(200).json(updatedRealisation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE realisation
router.delete('/:id', async (req, res) => {
    try {
        await deleteRealisation(req.params.id);
        res.status(200).json({ message: 'Realisation deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;