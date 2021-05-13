const { Schema, model } = require('mongoose');

const SBOL_GlyphSchema = new Schema({

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
        end: { type: Number, required: true },
        validate: {
            validator: (s) => {
                return s.end - s.start > 1;
            },
            message: 'Length must be longer than 1 bp.'
        }

        // Range.Orientation?
    },

    // Function of gene
    // SBOL API url: http://{SBOL-VO-WS}/glyph/{ONTOLOGY_TERM}"}
    Ontology_Term: {
        type: String,
        required: true
    },
})

module.exports = model('SBOL_Glyph', SBOL_GlyphSchema);