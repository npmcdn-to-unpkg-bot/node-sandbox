/*
Very simple Express demo.
*/

var express = require('express'),
    app = express();
    
app.get('/', function (request, response) {
    response.send(
        '<html><body><h2>This would be some HTML</h2></body></html>'); 
});

var port = process.env.PORT;
console.log('Starting Express app on port ' + port);
app.listen(port);
