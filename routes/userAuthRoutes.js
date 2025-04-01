const express = require('express');
const router = express.Router();
const { createUserAuth, getAllUserAuths, updateUserAuthById, deleteUserAuthById } = require('../service/userAuthService');

// Créer un user
router.post('/', async (req, res) => {
    try{
        const data = await createUserAuth(req.body);
        return res.json({ Success: true, Message: "", Data: data });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

// Lire toutes les user
router.get('/', async (req, res) => {
    try{
        const datas = await getAllUserAuths();
        return res.json({ Success: true, Message: "", Data: datas });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    try{
        const response = await updateUserAuthById(req.params.id, req.body);
        return res.json({ Success: true, Message: "", Data: response });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

// Supprimer un user
router.delete('/:id', async (req, res) => {
    try{
        const response = await deleteUserAuthById(req.params.id);
        return res.json({ Success: true, Message: "", Data: response });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

module.exports = router;