
var config = require('./config/config'),
    express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    app = express(),
    db = mongoose();

console.log('Starting server on ' + config.host + ':' + config.port);    
app.listen(config.port, config.host);
console.log('Server ready.');    

module.exports = app;