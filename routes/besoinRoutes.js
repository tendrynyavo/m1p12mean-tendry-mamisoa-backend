const express = require('express');
const router = express.Router();
const {
    getBesoins,
    getBesoinById,
    createBesoin,
    updateBesoin,
    deleteBesoin,
    getPrestationByMotorisationId
} = require('../service/besoinService');

// GET all besoins
router.get('/', async (req, res) => {
    try {
        const besoins = await getBesoins();
        res.status(200).json(besoins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET besoin by id
router.get('/:id', async (req, res) => {
    try {
        const besoin = await getBesoinById(req.params.id);
        res.status(200).json(besoin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/motorisations/:id', async (req, res) => {
    try {
        const prestations = await getPrestationByMotorisationId(req.params.id);
        res.status(200).json(prestations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// POST create new besoin
router.post('/', async (req, res) => {
    try {
        const newBesoin = await createBesoin(req.body);
        res.status(201).json(newBesoin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update besoin
router.put('/:id', async (req, res) => {
    try {
        const updatedBesoin = await updateBesoin(req.params.id, req.body);
        res.status(200).json(updatedBesoin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE besoin
router.delete('/:id', async (req, res) => {
    try {
        const deletedBesoin = await deleteBesoin(req.params.id);
        res.status(200).json(deletedBesoin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;