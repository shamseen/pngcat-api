// structure from https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

/* -------------------------------------------------------------- */
// European Nucleotide Archive (ENA): database of sequences
// The European Bioinformatics Institute exposes an API to access ENA
// In ENA, record IDs are called accessions 
//      ***limiting search to sequence accession number for now
/* -------------------------------------------------------------- */
const axios = require('axios')


class ENAService {
    /* -  using default constructor - */

    // limiting to sequence accession number for now.
    // static baseURL = 'https://www.ebi.ac.uk/ena/portal/api/search?dataPortal=ena&query=';
    static resultLimit = 10;
    enaSequence = '';
    enaStudy = '';

    // calls API using a pre-made rule on their side.
    // TODO: use POST endpoint
    async getSequences() {
        try {
            const response = await axios.get('https://www.ebi.ac.uk/ena/portal/api/search?rule=8624c855-9921-4b98-b763-ac0d79b6a567');

            return response.data;

        } catch (error) {
            // console.log(error);

            return error.message;
        }
    }

}

module.exports = ENAService;