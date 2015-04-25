
var fs = require('fs');

exports = module.exports = Object.create(null);

exports.scan = function scan (dir, depth, done) {
    depth--;
    
    // Contains all _files_ located in search.
    var results = [];
    
    fs.readdir(dir, function (err, list) {
        if (err) return done(err); 
        
        var i = 0;
        
        function next () {
            var file = list[i++];
            
            if (!file) {
                // Have reached end of files list, return results.
                return done(null, results);
            }
            
            file = dir + '/' + file;
            
            fs.stat(file, function (err, stat) {
                if (err) return done(err);
                
                if (stat && stat.isDirectory()) {
                    // Found a directory.
                    
                    if (depth !== 0) {
                        var ndepth = (depth > 1) ? depth - 1 : 1;
                        exports.scan(file, ndepth, function (err, res) {
                            results = results.concat(res);
                            next();
                        });
                    } else {
                        next();
                    }
                } else {
                    // Found a file.
                    
                    results.push(file);
                    next();
                }
            });
        }
        
        next();
    });
};

