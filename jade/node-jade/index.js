
var jade = require('jade'),
    Q = require('q'),
    fs = require('fs'),
    jadeFile = process.argv[2],
    jsonFile = process.argv[3];

if (!jadeFile) {
    throw new Error('Missing command line argument to specify Jade template file.');
}

var fs_readFile = Q.denodeify(fs.readFile);

// Create array to hold multiple file-read promises. At minimum this will hold
// a promise to read the Jade file, but it could also include the JSON data
// file as well.
var fileReadPromises = [
    fs_readFile(jadeFile, 'utf8')
];

if (jsonFile) {
    fileReadPromises.push(fs_readFile(jsonFile, 'utf8'));
}

var allReadsPromise = Q.all(fileReadPromises);

allReadsPromise
    .then(function (fileContentsArray) {
        var jadeContents = fileContentsArray[0],
            jsonContents = fileContentsArray[1] || '',
            locals = JSON.parse(jsonContents);
        
        var templateFn = jade.compile(
            jadeContents, 
            {
                pretty: true, 
                filename: jadeFile
            
            }
        );
        
        var html = templateFn(locals);
        
        console.log(html);
    })
    .catch(function (error) {
        console.error(error.toString());
    });
