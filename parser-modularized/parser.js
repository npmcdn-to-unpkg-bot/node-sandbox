// Parser constructor.
var Parser = function () {
};

// Parse implementation.
Parser.prototype.parse = function (fileContents) {
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
    
    return results;
};

// Expore the Parser constructor from this module.
module.exports = Parser;
