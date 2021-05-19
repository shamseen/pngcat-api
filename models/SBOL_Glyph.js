const { Schema } = require('mongoose');

// Subdocument
const SBOL_GlyphSchema = new Schema({

    // Name of gene
    Gene_Label: { type: String, required: true },

    // OPTIONAL: Section of DNA_Seq tied to glyph (number of G/C/A/Ts)
    Gene_Location: {
        required: false,
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

    // Function of gene
    // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
    Ontology_Term: {
        type: String,
        required: true
    },
});

//  exporting schema as is since it's a subdocument
module.exports = SBOL_GlyphSchema;