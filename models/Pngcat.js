const { Schema, model } = require('mongoose');
const SBOL_Glyph = require('./SBOL_Glyph');

const PngcatSchema = new Schema({

  // Symbols mapping to genes / functions
  SBOL_Glyphs: {
    type: [SBOL_Glyph],
    required: true
  },

  // Researchers
  Authors: { type: [String], required: true },

  // Article link
  DOI: { type: String, required: true },

  // G/C/A/T sequence
  DNA_Seq: { type: String, required: true },

  // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
  'SBOL-VO-WS': { type: String, required: true },

  // TODO: GenBank foreign key
})

module.exports = model('Pngcat', PngcatSchema);