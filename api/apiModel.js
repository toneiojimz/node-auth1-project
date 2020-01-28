const db = require('../data/dbConfig.js');

module.exports = {
    registerUser,
    getUsers,
    getUserByUsername
}

function registerUser(user) {
    return db('users').insert(user);
}

function getUserByUsername(username) {
    return db('users').where({ username }).first();
}

function getUsers() {
    return db('users');
}