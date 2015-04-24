
exports = module.exports = Object.create(null);

exports.parse = function (args) {
    var options = Object.create(null);
    
    // Iterate over arguments.
    args.forEach(function (argument) {
        // Check for a long-formed tag (tag begins with double dashes: '--').
        if (/^--/.test(argument)) {
            argument = argument.substr(2);
            
            // Check for equals sign
            if (argument.indexOf('=') !== -1) {
                var argumentKeyValuePair = argument.split('=');
                
                var key = argumentKeyValuePair.shift(),
                    value = argumentKeyValuePair.shift();
                
                if (/^[0-9]+$/.test(value)) {
                    // Convert value from string into number.
                    value = parseInt(value, 10);
                }
                
                options[key] = value;
            }
        }
    });
    
    return options;    
};
