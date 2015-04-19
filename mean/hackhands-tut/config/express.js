
var express = require('express');

module.exports = function () {
    var app = express();
 
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    var routeConfig = require('../app/routes/index.server.routes.js');
    routeConfig(app);
    
    app.use(express.static('./public'));
    
    return app;
}