const express = require('express');
const router = express.Router();
const Pngcat = require('../models/Pngcat')

// Index
router.get('/', async (req, res) => {
  let filters;
  if(Object.keys(req.query).length > 0) {
    filters = { ...req.query }
  }
  try {
    if(!filters){
      const foundPngcats = await Pngcat.find({});
      res.status(200).json(foundPngcats)
    } else {
      const foundPngcats = await Pngcat.find({ ...filters });
      res.status(200).json(foundPngcats)
    }
  } catch (err) {
    res.status(400).json({
      msg: err.message
    })
  }
});

// Create
router.post('/', async (req, res) => {
  try {
    const foundPngcat = await Pngcat.create(req.body)
    res.status(200).json(createdPngcat)
  } catch(err) {
    res.status(400).json({
      msg: err.message
    })
  }
});

// Show
router.get('/:id', async (req, res) => {
  try {
    const foundPngcat = await Pngcat.findById(req.params.id);
    res.status(200).json(foundPngcat)
  } catch (err) {
    res.status(400).json({
      msg: err.message
    })
  }
});

// Show by DNA Sequence
router.get('/:ByDNASeq/:DNA_seq', async (req, res) => {
  try {
    const foundPngcat = await Pngcat.findOne({ name: req.params.DNA_Seq });
    res.status(200).json(foundPngcat)
  } catch (err) {
    res.status(400).json({
      msg: err.message
    })
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const deletePngcat = await Pngcat.findByIdAndUpdate(req.params.id);
    res.status(200).json(updatedPngcat)
  } catch (err) {
    res.status(400).json({
      msg: err.message
    })
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedPngcat = await Pngcat.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPngcat);
  } catch (err) {
    res.status(400).json({
      msg: err.message
    })
  }
})

module.exports = router