#!/usr/bin/env node

var tags = require('./lib/tags.js'),
    search = require('./lib/search.js');

var defaults = {
    path: '.',
    query: '',
    depth: 2
};

var replacements = {
    p: 'path',
    q: 'query',
    d: 'depth',
    h: 'help'
};

var parsedTags = tags.parse(process.argv, defaults, replacements);

if (parsedTags.help) {
    console.log('Usage: ./app.js -q=query [-d=depth] [-p=path]');
} else {
    search.scan(parsedTags.path, parsedTags.depth, function (err, files) {
        search.match(parsedTags.query, files).forEach(function (filename) {
            console.log(filename);
        });
    });
}
