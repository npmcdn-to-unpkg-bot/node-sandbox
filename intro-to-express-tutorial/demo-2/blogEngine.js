/*
Simple mock blog engine.
*/

var entries = [{
    'id': 1,
    'title': 'Hello World',
    'body': 'This is the body of my very first fake blog post.',
    "published": "6/1/2013"
}, {
    "id": 2,
    "title": "Eggs for Breakfast",
    "body": "Today I had eggs for breakfast. Sooo exciting.",
    "published": "6/3/2013"
}, {
    "id": 3,
    "title": "Beer is Good",
    "body": "News Flash! Beer is awesome!",
    "published": "6/4/2013"
}, {
    "id": 4,
    "title": "Mean People Suck",
    "body": "People who are mean aren't nice or fun to hang around.",
    "published": "6/5/2013"
}, {
    "id": 5,
    "title": "I'm Leaving Technology X and You Care",
    "body": "Let me write some link bait about why I'm not using a particular technology anymore.",
    "published": "6/10/2013"
}, {
    "id": 6,
    "title": "Help My Kickstarter",
    "body": "I want a new XBox One. Please fund my Kickstarter.",
    "published": "6/12/2013"
}];

exports.getBlogEntries = function() {
    return entries;
};

exports.getRecentBlogEntries = function() {
    return entries.slice(entries.length - 3);
};

exports.getBlogEntry = function(id) {
    console.log('Looking for blog entry ' + id);

    for (var i = 0; i < entries.length; i++) {
        var blogEntry = entries[i];

        if (blogEntry.id == id) {
            return blogEntry;
        }
    };
};