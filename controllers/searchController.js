const express = require('express');
const router = express.Router();
const queryString = require('querystring');
const ENADataService = require('../dataServices/enaDataService');
const enaDataService = new ENADataService();

// TEST GET!
router.get('/', async (req, res) => {

    try {
        const found = await enaDataService.searchENA();
        res.status(200).json(found);

    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: err.message
        });
    }
});

// search in the format of : seqId=<>&studyId=<>&keyword=<>
router.get('/:query', async (req, res) => {

    const filter = queryString.parse(req.params.query);

    try {
        const found = await enaDataService.search(filter.seqId, filter.studyId, filter.keyword);
        res.status(200).json(found);

    } catch (err) {
        res.status(400).json({
            msg: err.message
        });
    }
});

module.exports = router;