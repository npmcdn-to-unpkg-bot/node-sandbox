
exports = module.exports = Object.create(null);

exports.parse = function (args, defaults) {
    var options = Object.create(null);
    
    // Initialize the options model with any default values.
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            options[key] = defaults[key];
        }
    }
    
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
