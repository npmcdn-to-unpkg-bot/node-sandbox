
exports = module.exports = Object.create(null);

function parse (args, defaults, replacements) {
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
            // Found long-form argument.
            
            argument = argument.substr(2);
            
            // Check for key=value pairs by looking for an equals sign.
            if (argument.indexOf('=') !== -1) {
                var argumentKeyValuePair = argument.split('=');
                
                var key = argumentKeyValuePair.shift(),
                    value = argumentKeyValuePair.shift();
                
                value = parseValue(value);
                
                options[key] = value;
            } else {
                // As this is not a key-value pair, store argument as options
                // key with a value of true.
                options[argument] = true;
            }
        } else if (/^-[a-zA-Z]+/.test(argument)) {
            // Found short-form argument(s).
            var shortFormArgValue = argument.substr(1);
            var equalsSignSections = shortFormArgValue.split('=');
            var shortFormArgs = equalsSignSections.shift().split('');
            
            while (shortFormArgs.length) {
                var key = replacements[shortFormArgs.shift()],
                    value = true;
                    
                if (!key) {
                    // Key doesn't correspond with short-form flag, 
                    // just skip this key.
                    continue;
                }
                
                if (shortFormArgs.length === 0 && equalsSignSections.length) {
                    // On last argument, assign value of right-hand side of
                    // key=value pair split.
                    value = equalsSignSections.shift();
                    value = parseValue(value);
                }
                
                options[key] = value;
            }
        }
    });
    
    return options;    
};

function parseValue (value) {
    var parsedValue = value;
    
    if (/^[0-9]+$/.test(value)) {
        // Convert value from string into number.
        parsedValue = parseInt(value, 10);
    }
    
    return parsedValue;
};

// Define exports
exports.parse = parse;
exports.parseValue = parseValue;
