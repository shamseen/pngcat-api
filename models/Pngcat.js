const { Schema, model } = require('mongoose');
// const SBOL_Glyph = require('./SBOL_Glyph');

// import isn't working so moved definition here.
const SBOL_Glyph = new Schema({

  // Name of gene
  Gene_Label: { type: String, required: true },

  // Section of DNA_Seq tied to glyph (number of G/C/A/Ts)
  Gene_Location: {
    start: {
      type: Number,
      required: true,

      // SBOL sequences start at 1
      min: [1, 'Must start at or after first basepair.']
    },
    end: {
      type: Number,
      required: true,
      min: [this.start + 1, "Gene must be longer than 1 bp."]
    }
  },

  // Range.Orientation?

  // Function of gene
  // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
  Ontology_Term: {
    type: String,
    required: true
  },
})

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