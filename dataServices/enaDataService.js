// structure from https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i

/* -------------------------------------------------------------- */
// European Nucleotide Archive (ENA): database of sequences
// The European Bioinformatics Institute exposes an API to access ENA
// In ENA, record IDs are called accessions 
/* -------------------------------------------------------------- */
const axios = require('axios')


class ENADataService {
    /* -- default constructor -- */

    /* -- variables for JOINs -- */
    // static baseURL = 'https://www.ebi.ac.uk/ena/portal/api/search?dataPortal=ena&query=';
    // static resultLimit = 10;

    /* -- API Calls -- */
    // BLOCKED: ena POST endpoint docs are missing, waiting to hear back

    // using a custom rule i made on their side instead
    async searchENA() {
        try {
            const response = await axios.get('https://www.ebi.ac.uk/ena/portal/api/search?format=json&rule=8624c855-9921-4b98-b763-ac0d79b6a567');

            return response.data; // axios returns JSON already

        } catch (error) {
            // console.log(error);

            return error.message;
        }
    }

    /* -- Search Functionality -- */

    filterByAccession(accType, value, data) {
        console.log('accession');
        const filtered = data.filter(d => d[accType] === value);
        return filtered;
    }

    // looking at ENA record's description and scientific name
    filterByKeyword(keyword, record) {
        console.log(record);
        return (record.scientific_name.includes(keyword)
            || record.description.includes(keyword));
    }

    async search(seq_accession, study_accession, keyword) {
        this.enaData = await this.searchENA();

        let results = [...this.enaData];
        console.log(results);

        if (seq_accession !== '')
            results = this.filterByAccession('accession', seq_accession, results);

        if (study_accession !== '')
            results = this.filterByAccession('study_accession', study_accession, results);

        if (keyword !== '')
            results = results.filter(r => this.filterByKeyword(keyword, r));

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