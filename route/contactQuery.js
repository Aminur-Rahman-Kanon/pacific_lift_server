const express = require('express');
const router = express.Router();
const { sendQuery } = require('../utilities/utilities');

router.post('/', async (req, res) => {
    const data = req.body;

    if (data){
        const status = await sendQuery(data);
        if (status.status === 'success'){
            return res.json({ status: 'success' })
        }
        else {
            return res.json({ status: 'failed' });
        }
    }
    else {
        return res.json({ status: 'failed' });
    }
    
})

module.exports = router;