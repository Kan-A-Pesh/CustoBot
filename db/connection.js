const monk = require('monk');
const env = require('./../config')
const connectionString = env.MONGODB_URI;
const db = monk(connectionString);

module.exports = db;