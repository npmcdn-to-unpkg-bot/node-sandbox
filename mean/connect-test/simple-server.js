var connect = require('connect'),
    app = connect();

var port = process.env.PORT;

var howdyWorld = function (req, res, next) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Howdy World');
};

app.use(howdyWorld);
app.listen(port);

console.log('Server running on port ' + port);
