
// Load the fs and parser modules.
var Parser = require('./parser'),
    FileReader = require('./file-reader');

var programArgs = process.argv.slice(2);

if (!programArgs) {
    throw Error('Please specify a target log file to be parsed in the CLI arguments.');
}

programArgs.forEach(function (filepath) {
    console.log('Log file path:\n' + filepath);
    FileReader.read(filepath, function (fileContents) {
        console.log('File contents:\n' + fileContents);
        
        console.log('Parsing...');
        
        var parser = new Parser();
        
        var parseResults = parser.parse(fileContents);
        
        console.log('Results:\n' + JSON.stringify(parseResults));
    });
});

