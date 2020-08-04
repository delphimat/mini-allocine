// For the default version
const algoliasearch = require('algoliasearch');

const client = algoliasearch('OQGENTZBQK', '6e79ad3d80cfdc48bed421d00888064f');
const index = client.initIndex('dev_wookie_movie');

const contactsJSON = require('./resources/movies.json');

// remove old datas
index.clearObjects()
// push new one
index.saveObjects(contactsJSON.movies, {
    autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
    console.log(objectIDs);
});
