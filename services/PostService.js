var Post = require('./models/Post');
var User = require('./models/User');

/**
 * Get all data of a specific post
 * @param  {ObjectId}	postId 		Id of a post to get
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getPostById = function getPostById(postId, callback) {
	if (!postId) {
		return callback(new Error('Id is null'));
	}

	Post.findOne({
		_id: postId
	}, function(err, post) {
		if (err) {
			return callback(err);
		}
		callback(null, post);
	});
}

/**
 * Get all posts of a specific user
 * @param  {ObjectId} userId		Id of user to get all posts
 * @param  {Function} callback 	Callback function
 * @return {void}
 */
var getPostsByUser = function getPostsByUser(userId, callback) {
	if (!userId) {
		return callback(new Error('UserId is null'));
	}

	User.findOne({
		_id: userId
	}, function(err, user) {
		if (err) {
			return callback(err);
		}
		if (!user) {
			return callback(new Error('User not found'));
		}

		Post.find({
			author: userId
		}, function(err, posts) {
			if (err) {
				return callback(err);
			}
			callback(null, posts);
		});
	});
}

/**
 * Get all data of all posts in database
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getAllPost = function getAllPost(callback) {
	Post.find({}, function(err, posts) {
		if (err) {
			return callback(err);
		}
		callback(null, posts);
	});
}

/**
 * Create a post
 * @param  {Object}		data			All data of a post
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var createPost = function createPost(data, callback) {
	if (!data) {
		return callback(new Error('Post is null'));
	}
	if (!data.author) {
		return callback(new Error('Author is null'));
	}
	if (!data.title) {
		return callback(new Error('Title is null'));
	}
	if (!data.brief) {
		return callback(new Error('Brief is null'));
	}
	if (!data.content) {
		return callback(new Error('Content is null'));
	}
	if (data.vote) {
		data.vote = [];
	}
	if (data.favorite) {
		data.favorite = [];
	}
	if (data.modified) {
		data.modified = null;
	}
	if (data.comment) {
		data.comment = [];
	}
	if (data.removed) {
		!data.removed = false;
	}

	var finalData = data;
	finalData.create = new Date();

	Post.create(finalData, function(err, post) {
		if (err) {
			return callback(err);
		}
		callback(null, post);
	});
}

/**
 * Update data of a post
 * @param  {ObjectId}	postId		Id of a post to update
 * @param  {Object}		data			All updated data of a post
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var updatePost = function updatePost(postId, data, callback) {
	if (!postId) {
		return callback(new Error('postId is null'));
	}

	if (!data.title) {
		return callback(new Error('Title is null'));
	}
	if (!data.brief) {
		return callback(new Error('Brief is null'));
	}
	if (!data.content) {
		return callback(new Error('Content is null'));
	}

	Post.findOne({
		_id: postId
	}, function(err, post) {
		if (err) {
			return callback(err);
		}

		var updatedData = {
			title: data.title,
			brief: data.brief,
			content: data.content,
			modified: new Date()
		}

		Post.findOneAndUpdate({
			_id: postId
		}, updatedData, function(err, data) {
			if (err) {
				return callback(err);
			}
			callback(null, data);
		});
	});
}

/**
 * Remove a post from homepage but still stored in database
 * @param  {ObjectId}	postId		Id of a post to remove
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var removePost = function removePost(postId, callback) {
	if (!postId) {
		return callback(new Error('postId is null'));
	}

	Post.findOneAndUpdate({
		_id: postId
	}, {
		removed: true
	}, function(err, data) {
		if (err) {
			return callback(err);
		}
		callback(null, data);
	});
}

/**
 * Remove a post from database
 * @param  {ObjectId}	postId		Id of a post to delete
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var hardDeletePost = function hardDeletePost(postId, callback) {
	if (!postId) {
		return callback(new Error('postId is null'));
	}

	Post.findOneAndRemove({
		_id: postId
	}, function(err, data) {
		if (err) {
			return callback(err);
		}
		callback(null, data);
	});
}

module.exports = {
	getPostById: getPostById,
	getPostsByUser: getPostsByUser,
	getAllPost: getAllPost,
	createPost: createPost,
	updatePost: updatePost,
	removePost: removePost,
	hardDeletePost: hardDeletePost
}