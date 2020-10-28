const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile'); // knexfile contains all the DB configurations for all environments
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig); // it creates the required connection for the app to use

module.exports = connection;
