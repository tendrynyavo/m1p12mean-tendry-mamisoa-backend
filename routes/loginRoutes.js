const express = require('express');
const router = express.Router();
const { generateTokenFromUserDetails } = require('../service/loginService');

router.post('/', async (req, res) => {
    try{
        const data = await generateTokenFromUserDetails(req.body);
        return res.json({ Success: true, Message: "", Data: data });
    }catch(error){
        return res.json({ Success: false, Message: error.message });
    }
});

router.post('/details-user', async (req, res) => {
    try {
        const data = await getUserDetailsByToken(req.body);
        return res.json({ Success: true, Message: "", Data: data });
    }
    catch (error) {
        return res.json({ Success: false, Message: error.message });
    }
});

module.exports = router;