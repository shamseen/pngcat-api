const express = require('express');
const router = express.Router();
const ENADataService = require('../dataServices/enaDataService');
const ena = new ENADataService();

// TEST GET!
router.get('/', async (req, res) => {

    try {
        const found = ena.enaData;
        res.status(200).json(found);

    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: err.message
        });
    }
});

// 
router.get('/:query', async (req, res) => {
    // const filter = { [req.params.prop]: req.params.val };
    // TODO: parse query, search mongo too

    try {
        const found = [];
        // const found = await enaService.search();
        res.status(200).json(found);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});

module.exports = router;