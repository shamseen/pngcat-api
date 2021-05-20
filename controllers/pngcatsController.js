const express = require("express");
const router = express.Router();
const Pngcat = require("../models/Pngcat");

("use strict");

// Index: an ok message to show it's working.
router.get("/", async (req, res) => {
	try {
		res.status(200).json('welcome to pnGCAT controller!');
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// Showing all 
router.get("/all", async (req, res) => {
	try {
		const foundPngcats = await Pngcat.find({});
		res.status(200).json(foundPngcats);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// Create
router.post("/", async (req, res) => {
	try {
		const createPngcat = await Pngcat.create(req.body);
		res.status(200).json(createPngcat);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// Show
router.get("/:id", async (req, res) => {
	try {
		const foundPngcat = await Pngcat.findById(req.params.id);
		res.status(200).json(foundPngcat);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// show by Seq_Accession
router.get("/BySeq_Accession/:seq_accession", async (req, res) => {
	try {
		const foundPngcat = await Pngcat.findOne({
			name: req.params.Seq_Accession,
		});
		res.status(200).json(foundPngcat);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

//show by Study_Accession
router.get("/ByStudy_Accession/:study_accession", async (req, res) => {
	try {
		const foundPngcat = await Pngcat.findOne({
			name: req.params.Study_Accession,
		});
		res.status(200).json(foundPngcat);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// Update
router.put("/:id", async (req, res) => {
	try {
		const updatePngcat = await Pngcat.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(200).json(updatePngcat);
	} catch (err) {
		res.status(400).json({
			msg: err.message,
		});
	}
});

// Delete
router.delete("/:id", async (req, res) => {
	try {
		const deletePngcat = await Pngcat.findByIdAndDelete(req.params.id);
		res.status(200).json(deletePngcat);
	} catch (err) {
		res.status(400).json({
			msg: error.message,
		});
	}
});

module.exports = router;
