var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets');

var assetsOptions = {
    source: './assets',
    destination: './assets'
};

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(assets(assetsOptions))
    .build(function(err, files) {
        console.log('Build function...');
        
        if (err) throw err;
        
        console.log('Build successful.');
        console.log('Output files:', Object.keys(files));
    });
