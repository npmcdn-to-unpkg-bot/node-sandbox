var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    watch = require('metalsmith-watch');

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(markdown())
    .use(watch())
    .build(function(err, files) {
        console.log('Build function...');
        
        if (err) throw err;
        
        console.log('Build successful.');
        console.log('Output files:', Object.keys(files));
    });