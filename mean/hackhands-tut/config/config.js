
/*
Determine the configuration file to load by examining the 
NODE_ENV environment variable.
*/

// Default environment is 'development'.
var envName = process.env.NODE_ENV || 'development';

var envConfigPath = './env/' + envName + '.js';

module.exports = require(envConfigPath);
