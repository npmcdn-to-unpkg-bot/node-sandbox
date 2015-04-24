
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
            
            // Check for key=value pairs by looking for an equals sign.
            if (argument.indexOf('=') !== -1) {
                var argumentKeyValuePair = argument.split('=');
                
                var key = argumentKeyValuePair.shift(),
                    value = argumentKeyValuePair.shift();
                
                if (/^[0-9]+$/.test(value)) {
                    // Convert value from string into number.
                    value = parseInt(value, 10);
                }
                
                options[key] = value;
            } else {
                // As this is not a key-value pair, store argument as options
                // key with a value of true.
                options[argument] = true;
            }
        }
    });
    
    return options;    
};

exports.parseValue = function parseValue (value) {
    return value;
};
