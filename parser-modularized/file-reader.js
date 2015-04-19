// Load the fs module.
var fs = require('fs');

var FileReader = {
    read: function (filepath, callback) {
        // Read the contents of the file into memory.
        fs.readFile(filepath, function (err, data) {
            // If there is an error, re-throw it.
            if (err) throw err;
            
            // Convert file data buffer to string.
            var fileText = data.toString();
            
            callback(fileText);
        });
    }
};

module.exports = FileReader;