var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    branch = require('metalsmith-branch'),
    ignore = require('metalsmith-ignore');

function filenameLister (label) {
    return function (files, metalsmith, done) {
        var filenames = Object.keys(files);
        
        console.log('[', label, ']', 'Filenames:', filenames);
        
        done();
    };
}

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use( branch()
        .pattern('*.md')
        .use(ignore('snippets/*'))
        .use(filenameLister('Base :: Pre-Markdown'))
        .use(markdown())
        .use(filenameLister('Base :: Post-Markdown'))
    )
    .use( branch()
        .pattern('snippets/*.md')
        .use(filenameLister('Snippets :: Pre-Markdown'))
        .use(markdown())
        .use(filenameLister('Snippets :: Post-Markdown'))
    )
    .build(function(err, files) {
        console.log('Build function...');
        
        if (err) throw err;
        
        console.log('Build successful.');
        console.log('Output files:', Object.keys(files));
    });