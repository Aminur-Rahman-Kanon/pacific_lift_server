const express = require('express');
const router = express.Router();
const { sendQuoteQuery } = require('../utilities/utilities');

router.post('/', async (req, res) => {
    const data = req.body;

    if (!data) return res.json({ status: 'failed' });

    const returnedResponse = await sendQuoteQuery(data);

    if (returnedResponse.status === 'success'){
        return res.json({ status: 'success' });
    }
    else {
        return res.json({ status: 'failed' });
    }
})

module.exports = router;
