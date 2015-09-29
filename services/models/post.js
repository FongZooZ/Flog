var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var postSchema = new Schema({
	author: ObjectId,
	title: String,
	brief: String,
	content: String,
	vote: [{
		author: ObjectId,
		voted: Date,
		type: Boolean // true is up, false is down
	}],
	favorite: [{
		author: ObjectId,
		faved: Date
	}]
	created: Date,
	modified: Date,
	comments: [{
		author: ObjectId,
		created: Date,
		modified: Date
	}],
	removed: Boolean
});

var Post = mongoose.model('post', postSchema, 'post');

module.exports = Post;