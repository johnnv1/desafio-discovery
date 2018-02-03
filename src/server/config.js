require('dotenv').config();

const config = {
  username: process.env.DISCOVERY_USERNAME,
  password: process.env.DISCOVERY_PASSWORD,
  collectionId: process.env.DISCOVERY_COLLECTION_ID,
  environmentId: process.env.DISCOVERY_ENVIRONMENT_ID,
};

module.exports = config;