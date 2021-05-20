const express = require('express');
const router = express.Router();
// const Pngcat = require('../models/Pngcat')

'use strict';

// Index / Home
router.get('/', async (req, res) => {
  res.status(200).send('ATTAGGCATmeowCATGTGGAT'); // bc i'm a dork
});

// Search results
router.get('/Search', (req, res) => {
  // getting dummy data
  let jsonData = require('../models/mockSearchResult.json')

  // returning unaltered JSON
  res.status(200).json(jsonData)
})

module.exports = router