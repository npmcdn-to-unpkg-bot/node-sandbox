
var moment = require('moment'),
    fs = require('fs');

// Get the stats of a test file. Read synchronously for simplicity; better
// implementations would use async calls.
var stats = fs.statSync('./test-article.md');

var file = {
    accessTime: moment(stats.atime.toISOString()),
    modifiedTime: moment(stats.mtime.toISOString()),
    changeTime: moment(stats.ctime.toISOString())
};

console.log('Access time:',
    file.accessTime.format(),
    '|',
    file.accessTime.fromNow()
);

console.log('Modified time:',
    file.modifiedTime.format(),
    '|',
    file.modifiedTime.fromNow()
);


console.log('Change time:',
    file.changeTime.format(),
    '|',
    file.changeTime.fromNow()
);

if (stats.birthtime) {
    var birthTime = moment(stats.birthtime.toISOString());
    
    console.log('Birth (create) time:',
        birthTime.format(),
        '|',
        birthTime.fromNow()
    );
}