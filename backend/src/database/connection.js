const knex = require("knex");
const configuration = require("../../knexfile");
// uses the development config set in knexfile
const connection = knex(configuration.development);

module.exports = connection;
