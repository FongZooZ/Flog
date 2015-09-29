var User = require('./models/User');

/**
 * Get all data of a specific user
 * @param  {ObjectId}	userId 		Id of an user to get
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getUserById = function getUserById(userId, callback) {

}

/**
 * Get all data of all users in database
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var getAllUser = function getAllUser(callback) {

}

/**
 * Create an user
 * @param  {Object}		data			All data of an user
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var createUser = function createUser(data, callback) {

}

/**
 * Update data of an user
 * @param  {ObjectId}	userId		Id of an user to update
 * @param  {Object}		data			All updated data of an user
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var updateUser = function updateUser(userId, data, callback) {

}

/**
 * Remove an user from homepage but still stored in database
 * @param  {ObjectId}	userId		Id of an user to remove
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var removeUser = function removeUser(userId, callback) {

}

/**
 * Remove an user from database
 * @param  {ObjectId}	userId		Id of an user to delete
 * @param  {Function}	callback 	Callback function
 * @return {void}
 */
var hardDeleteUser = function hardDeleteUser(userId, callback) {

}

module.exports = {
	getUserById: getUserById,
	getAllUser: getAllUser,
	createUser: createUser,
	updateUser: updateUser,
	removeUser: removeUser,
	hardDeleteUser: hardDeleteUser
}