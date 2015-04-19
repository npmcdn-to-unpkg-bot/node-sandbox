var connect = require('connect'),
    app = connect();

var port = process.env.PORT;
var host = process.env.IP;

var logger = function (req, res, next) {
    console.log(req.method, req.url);
    
    next();
};

var howdyWorld = function (req, res, next) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Howdy World');
};

app.use(logger);
app.use('/howdy', howdyWorld);

app.listen(port, host);

console.log('Server running on ' + host + ':' + port);