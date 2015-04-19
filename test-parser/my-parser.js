/*
Simple example parser.

Based upon this tutorial:
http://blog.modulus.io/absolute-beginners-guide-to-nodejs
*/

// Load the fs module.
var fs = require('fs');

// Read the contents of the log file into memory.
fs.readFile('example-log.txt', 
    function (err, data) {
        // File has either been read, or has an error.
        
        // If an error occurred, rethrow it.
        if (err) throw err;
        
        console.log('File loaded. Parsing...');
        
        // Convert the data from a buffer to a string.
        var fileContents = data.toString();
        
        var results = {};
        
        // Break up the file into lines.
        var fileLines = fileContents.split('\n');
        
        fileLines.forEach(function (line) {
           var sections = line.split(' ');
           var letter = sections[1];
           var count = parseInt(sections[2]);
           
           if (!results[letter]) {
               results[letter] = 0;
           }
           
           results[letter] += count;
        });
        
        console.log(results);
    });