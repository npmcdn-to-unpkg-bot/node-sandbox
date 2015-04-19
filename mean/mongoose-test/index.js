
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;


var blogPostsDbUrl = 'mongodb://localhost/blog';

var blogPostsDb = mongoose.connect(blogPostsDbUrl);

var BlogPostSchema = new Schema({
    title: String,
    body: String
}, {collection: 'blogpoststest'});

var BlogPost = mongoose.model('BlogPost', BlogPostSchema);

var newPost = new BlogPost();
newPost.title = 'Some title here';
newPost.body = 'This is the body content.';
newPost.save(function (err) {
    if (err) throw err;
    
    console.log('Model saved successfully.');
});

BlogPost.find({}, function (err, results) {
    if (err) throw err;
    
    console.log('Found ' + results.length); 
});