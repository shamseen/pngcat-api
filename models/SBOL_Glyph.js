const { Schema } = require('mongoose');

// Subdocument
const SBOL_GlyphSchema = new Schema({

    // Name of gene
    Gene_Label: { type: String, required: true },

    // Function of gene
    // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
    Ontology_Term: {
        type: String,
        required: true
    },
});

//  exporting schema as is since it's a subdocument
module.exports = SBOL_GlyphSchema;