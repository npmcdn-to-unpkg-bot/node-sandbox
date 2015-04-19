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

var dynResponder = function (contentType, message) {
    return function (req, res, next) {
        res.setHeader('Content-type', contentType);
        res.end(message);
    }  
};

var redirector = function (target) {
    return function (req, res, next) {
        console.log('Redirecting ' + req.url + ' to ' + target);
        
        res.writeHead(302, {
            'Location': 'http://node-sandbox-claycarpenter.c9.io' + target
        });
        
        res.end();
    };
};

app.use(logger);
app.use('/howdy', howdyWorld);
app.use('/simpleText', 
    dynResponder('text/plain','Simple plain text response'));
app.use('/simpleHtml', 
    dynResponder('text/html', '<html><body><h1>Simple HTML</h1></body></html>'));

app.use('/', redirector('/howdy'));

app.listen(port, host);

console.log('Server running on ' + host + ':' + port);