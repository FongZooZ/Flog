var User = require('./models/User');
var Post = require('./models/Post');

/**
 * Get all data of a specific user
 * @param  {ObjectId}	userId 		Id of an user to get
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getUserById = function getUserById(userId, callback) {
	if (!userId) {
		return callback(new Error('userId is null'));
	}

	User.findOne({
		_id: userId
	}, function(err, user) {
		if (err) {
			return callback(err);
		}
		delete user.password;
		callback(null, user);
	});
}

/**
 * @param  {ObjectId}	postId		Id of post to get user
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getUserByPost = function getUserByPost(postId, callback) {
	if (!postId) {
		return callback(new Error('postId is null'));
	}

	Post.findOne({
		_id: postId
	}, function(err, post) {
		if (err) {
			return callback(err);
		}
		getUserById(post.author, function(err, user) {
			if (err) {
				return callback(err);
			}
			delete user.password;
			callback(null, user);
		});
	});
}

/**
 * Get all data of all users in database
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getAllUser = function getAllUser(callback) {
	User.find({}, function(err, users) {
		if (err) {
			return callback(err);
		}
		callback(null, users);
	});
}

/**
 * Create an user
 * @param  {Object}		data			All data of an user
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var createUser = function createUser(data, callback) {
	if (!data) {
		return callback(new Error('User data is null'));
	}
	if (!data.username) {
		return callback(new Error('Username is null'));
	}
	if (!data.password) {
		return callback(new Error('Password is null'));
	}
	if (!data.email) {
		// currently not handle
		// return callback(new Error('Email is null'));
	}
	data.admin = false;
	data.verified = false;

	User.create(data, function(err, user) {
		if (err) {
			return callback(err);
		}
		delete user.password;
		callback(null, user);
		sendActivationMail(user.email, '', function() {
			console.log('E-mail was sent!');
		});
	});
}

/**
 * Send activation mail to user's email
 * @param  {String}		email 		email to send activation mail
 * @param  {String}		content		mail content
 * @param  {Function} callback 	Callback function
 * @return {void}
 */
var sendActivationMail = function sendActivationMail(email, content, callback) {
	// TODO: write later
}

/**
 * Activate an user acction
 * @param  {ObjectId}	userId 		user to activate
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var activateUser = function activateUser(userId, callback) {
	if (!userId) {
		return callback(new Error('userId is null'));
	}

	User.findOne({
		_id: userId
	}, function(err, user) {
		if (err) {
			return callback(err);
		}

		user.verified = true;
		user.save();
	});
}

/**
 * Set admin for an user
 * @param {ObjectId}	userId 		user to set admin
 * @param {Function}	callback 	Callback function
 */
var setAdmin = function setAdmin(userId, callback) {
	if (!userId) {
		return callback(new Error('userId is null'));
	}
	User.findOneAndUpdate({
		_id: userId
	}, {
		admin: true
	}, function(err, user) {
		if (err) {
			return callback(err);
		}
		delete user.password;
		callback(null, user);
	});
}

/**
 * Update data of an user
 * @param  {ObjectId}	userId		Id of an user to update
 * @param  {Object}		data			All updated data of an user
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var updateUser = function updateUser(userId, data, callback) {
	// TODO: write later
}

/**
 * Remove an user from database
 * @param  {ObjectId}	userId		Id of an user to delete
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var hardDeleteUser = function hardDeleteUser(userId, callback) {
	if (!userId) {
		return callback(new Error('userId is null'));
	}

	User.findOneAndRemove({
		_id: userId
	}, function(err, data) {
		if (err) {
			return callback(err);
		}
		callback(null, data);
	});
}

module.exports = {
	getUserById: getUserById,
	getUserByPost: getUserByPost,
	getAllUser: getAllUser,
	createUser: createUser,
	updateUser: updateUser,
	hardDeleteUser: hardDeleteUser
}