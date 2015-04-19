/*
Simple site, powered by Express.
*/

var express = require('express'),
    app = express(),
    jade = require('jade'),
    blogEngine = require('./blogEngine');

app.set('view engine', 'jade');

// Enable static file serving.
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index',
    {
        title: 'My Blog 2',
        entries: blogEngine.getRecentBlogEntries()
    });
});

app.get('/about', function (req, res) {
   res.render('about', {title: 'About Me'});
});

app.get('/articles', function (req, res) {
    res.render('articles',
    {
        title: 'All Articles',
        entries: blogEngine.getBlogEntries()
    });
});

app.get('/article/:id', function (req, res) {
    console.log('id: ' + req.params.id);
    
    var entry = blogEngine.getBlogEntry(req.params.id);
    
    console.log('Enty retrieved: ' + JSON.stringify(entry));
    
    res.render('article', 
    {
        title: entry.title, 
        entry: entry
    });
});

console.log('Starting...');
app.listen(process.env.PORT);