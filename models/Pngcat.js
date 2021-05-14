const { Schema, model } = require('mongoose');
const SBOL_GlyphSchema = require('./SBOL_Glyph');

// Removed authors & DNA seq since api doesn't return it.
const PngcatSchema = new Schema({

  // Symbols mapping to genes / functions
  SBOL_Glyphs: [SBOL_GlyphSchema],

  /* ---- Keys ---- */
  // ENA Foreign key
  Seq_Accession: { type: String, required: true },

  // ENA Linked article key
  Study_Accession: { type: String, required: true },

  // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
  'SBOL-VO-WS': { type: String, required: true },

});

module.exports = model('Pngcat', PngcatSchema);