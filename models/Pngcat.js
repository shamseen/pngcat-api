const { Schema, model } = require('mongoose');

const PngcatSchema = new Schema({
  DNA_seq: { type: String, required: true, unique: true },
  SBOL_Glyphs: {
    glyphs: { type: String }
  },
  authors: [],
  DOI: { type: String, required: true }
})

module.exports = model('Pngcat', PngcatSchema);