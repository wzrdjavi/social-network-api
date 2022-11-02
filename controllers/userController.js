const {user,thought} = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((users) => res.status(500).json(error.msg));
    }
