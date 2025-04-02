const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../service/userService');

// Créer un user
router.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        return res.json({ Success: true, Message: "", Data: data });
    } catch(error) {
        return res.json({ Success: false, Message: error.message });
    }
});

// Lire toutes les user
router.get('/', async (req, res) => {
    try {
        const datas = await getAllUsers();
        return res.json({ Success: true, Message: "", Data: datas });
    } catch(error) {
        return res.json({ Success: false, Message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const response = await getUserById(req.params.id);
        return res.json({ Success: true, Message: "", Data: response });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    try{
        const response = await updateUserById(req.params.id, req.body);
        return res.json({ Success: true, Message: "", Data: response });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

// Supprimer un user
router.delete('/:id', async (req, res) => {
    try {
        const response = await deleteUserById(req.params.id);
        return res.json({ Success: true, Message: "", Data: response });
    } catch(error) {
        return res.json({ Success: false, Message: error.message });
    }
});

module.exports = router;