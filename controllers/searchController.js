const express = require('express');
const router = express.Router();
const ENAService = require('../dataServices/enaService');
const ena = new ENAService();

// TEST GET!
router.get('/', async (req, res) => {
    // const filter = { [req.params.prop]: req.params.val };

    try {
        const found = await ena.getSequences();
        res.status(200).json(found);

    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: err.message
        });
    }
});


// Show => GET by any prop
router.get('/:prop/:val', async (req, res) => {
    // const filter = { [req.params.prop]: req.params.val };

    try {
        const found = await enaService.search(req.params.prop, req.params.val);
        res.status(200).json(found);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});

module.exports = router;