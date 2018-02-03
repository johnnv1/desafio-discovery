const config = require('../config');
const watson = require('watson-developer-cloud');
const fs = require('fs');

const discovery = new watson.DiscoveryV1({
  username: config.username,
  password: config.password,
  version: 'v1',
  version_date: '2017-11-07',
});

const addDocumentToDiscovery = fileName =>
  new Promise((resolve, reject) => {
    const file = fs.readFileSync(fileName);
    discovery.addDocument({
      environment_id: config.environmentId,
      collection_id: config.collectionId,
      file,
    }, (err, data) => {
      if (err) {
        reject(data);
        return;
      }
      resolve(data);
    });
  });

const waitUntilFileExists = fileName =>
  new Promise((resolve) => {
    const interval = setInterval(() => {
      if (fs.existsSync(fileName)) {
        resolve(true);
        clearInterval(interval);
        return false;
      }
      return true;
    }, 200);
  });

const query = () =>
  new Promise((resolve, reject) => {
    discovery.query({
      environment_id: config.environmentId,
      collection_id: config.collectionId,
      count: 200, // Specifying the limit due to the application specific context.
    }, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });

const documentHasBeenProcessed = async (documentId) => {
  try {
    const { results } = await query();
    const document = results.filter(result => result.id === documentId)[0];
    if (!document) { return documentHasBeenProcessed(documentId); }
    return document;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deleteDocument = documentId =>
  new Promise((resolve, reject) => {
    discovery.deleteDocument({
      environment_id: config.environmentId,
      collection_id: config.collectionId,
      document_id: documentId,
    }, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });


const discover = async (fileName) => {
  try {
    const fileNameWithPath = `${__dirname}/../temp/${fileName}`;
    await waitUntilFileExists(fileNameWithPath);
    const document = await addDocumentToDiscovery(fileNameWithPath);
    const documentData = await documentHasBeenProcessed(document.document_id);
    await deleteDocument(document.document_id);

    const hasNoRelations = !documentHasBeenProcessed
      || !documentData.enriched_text.relations
      || documentData.enriched_text.relations.length === 0;

    if (hasNoRelations) { return []; }

    return documentData.enriched_text.relations;
  } catch (error) {
    if (!error) {
      console.log('trying again');
      return discover(fileName);
    }
    console.log('error', error);
    return false;
  }
};


module.exports = discover;
