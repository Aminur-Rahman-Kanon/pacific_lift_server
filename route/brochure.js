const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// const brochure = require('../public/brochure/Pacific_Lift_Ltd.pdf');

router.get('/', (req, res) => {
    const option = {
        root: path.join(__dirname, '..', 'public/brochure')
    }
    
    return res.sendFile('pacific_lift_ltd.pdf', option, (err) => {
        if (err){
            throw new Error(err)
        }
        console.log('file sent');
    })
})

module.exports = router;
