// structure from https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

/* -------------------------------------------------------------- */
// European Nucleotide Archive (ENA): database of sequences
// The European Bioinformatics Institute exposes an API to access ENA
// In ENA, record IDs are called accessions 
/* -------------------------------------------------------------- */
const axios = require('axios')


class ENADataService {
    /* -  populating with fixed search on instantiation - */
    constructor() {
        this.searchENA();
    }

    /* -- variables for JOINs -- */
    // static baseURL = 'https://www.ebi.ac.uk/ena/portal/api/search?dataPortal=ena&query=';
    // static resultLimit = 10;

    /* -- API Calls -- */
    // BLOCKED: ena POST endpoint docs are missing, waiting to hear back

    // using a custom rule i made on their side instead
    async searchENA() {
        try {
            const response = await axios.get('https://www.ebi.ac.uk/ena/portal/api/search?rule=8624c855-9921-4b98-b763-ac0d79b6a567');

            this.enaData = response.data; // axios returns JSON already
            return this.enaData;

        } catch (error) {
            // console.log(error);

            return error.message;
        }
    }

    /* -- Search Functionality -- */

    filterByAccession(accType, value, arr) {

    }

    filterByKeyword(keyword, arr) {

    }

    search(seq_accession, study_accession, keyword) {
        let results = [...this.enaData];

        if (seq_accession !== '')
            results = this.filterByAccession('accession', seq_accession, results);

        if (study_accession !== '')
            results = this.filterByAccession('study_accession', study_accession, results);

        if (keyword !== '')
            results = this.filterByKeyword(keyword, results);

        return results;
    }

    /* Returns array of:
     {
        "accession": "CP034527",
        "study_accession": "PRJNA504496",
        "scientific_name": "eukaryotic synthetic construct",
        "cell_type": "",
        "dataclass": "STD",
        "description": "Eukaryotic synthetic construct chromosome 3.",
        "mol_type": "other DNA",
        "plasmid": "",
        "keywords": ""
    }
    */
}

module.exports = ENADataService;