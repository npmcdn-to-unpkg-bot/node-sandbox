
// Configure values for a development environment.
var config = {
    port: process.env.PORT || 8080,
    host: process.env.IP || 'localhost',
    db: 'mongodb://localhost/todos'
};

module.exports = config;
