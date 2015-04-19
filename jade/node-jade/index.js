
var jade = require('jade'),
    Q = require('q'),
    fs = require('fs'),
    jadeFile = process.argv[2];

if (!jadeFile) {
    throw new Error('Missing command line argument to specify Jade template file.');
}

var fs_readFile = Q.denodeify(fs.readFile);

fs_readFile(jadeFile, 'utf8')
    .then(function (contents) {
        var templateFn = jade.compile(contents, {pretty: true, filename: jadeFile});
        var html = templateFn({});
        
        console.log(html);
    })
    .catch(function (error) {
        console.error(error.toString());
    });
