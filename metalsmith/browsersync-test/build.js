var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    browserSync = require('metalsmith-browser-sync');

var browserSyncOptions = {
    server: 'output',
    files: ['src/**/*.md']
};

function basicTemplateWrapper () {
    return function (files, metalsmith, done) {
        var filenames = Object.keys(files);
        filenames.forEach(function (filename) {
            var file = files[filename];
            
            console.log('Processing', filename);
            
            var contents = file.contents.toString();
            
            var wrappedContents = '<html><body>' + contents + '</body></html>';
            
            file.contents = new Buffer(wrappedContents);
        });
        
        done();
    };
}

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(markdown())
    .use(basicTemplateWrapper())
    .use(browserSync(browserSyncOptions))
    .build(function(err, files) {
        console.log('Build function...');
        
        if (err) throw err;
        
        console.log('Build successful.');
        console.log('Output files:', Object.keys(files));
    });