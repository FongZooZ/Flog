var Post = require('./models/Post');

/**
 * Get all data of a specific post
 * @param  {ObjectId}	postId 		Id of a post to get
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getPostById = function getPostById(postId, callback) {

}

/**
 * Get all data of all posts in database
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getAllPost = function getAllPost(callback) {

}

/**
 * Create a post
 * @param  {Object}		data			All data of a post
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var createPost = function createPost(data, callback) {

}

/**
 * Update data of a post
 * @param  {ObjectId}	postId		Id of a post to update
 * @param  {Object}		data			All updated data of a post
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var updatePost = function updatePost(postId, data, callback) {

}

/**
 * Remove a post from homepage but still stored in database
 * @param  {ObjectId}	postId		Id of a post to remove
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var removePost = function removePost(postId, callback) {

}

/**
 * Remove a post from database
 * @param  {ObjectId}	postId		Id of a post to delete
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var hardDeletePost = function hardDeletePost(postId, callback) {

}

module.exports = {
	getPostById: getPostById,
	getAllPost: getAllPost,
	createPost: createPost,
	updatePost: updatePost,
	removePost: removePost,
	hardDeletePost: hardDeletePost
}