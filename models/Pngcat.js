const { Schema, model } = require('mongoose');
// const SBOL_Glyph = require('./SBOL_Glyph');

// import isn't working so moved definition here.
const SBOL_Glyph = new Schema({

  // Name of gene
  Gene_Label: { type: String, required: true },

  // Function of gene
  // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
  Ontology_Term: {
    type: String,
    required: true
  },

  // Optional: Section of DNA_Seq tied to glyph (number of G/C/A/Ts)
  Gene_Location: {
    required: false,
    start: {
      type: Number,
      // SBOL sequences start at 1
      min: [1, 'Must start at or after first basepair.']
    },
    end: {
      type: Number,
      min: [this.start + 1, "Gene must be longer than 1 bp."]
    }
  },
});

// Removed authors & DNA seq since api doesn't return it.
const PngcatSchema = new Schema({

  // Symbols mapping to genes / functions
  SBOL_Glyphs: {
    type: [SBOL_Glyph]
  },

  /* ---- Keys ---- */
  // ENA Foreign key
  Seq_Accession: { type: String, required: true },

  // ENA Linked article key
  Study_Accession: { type: String, required: true },

  // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
  'SBOL-VO-WS': { type: String, required: true },

});

module.exports = model('Pngcat', PngcatSchema);