const {User, Thought} = require('../models');

module.exports = {
    // Get all User
    getUser(req, res) {
      User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Get a SingleUser
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No User with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a User
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Update a User
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No User with this id!' })
              : res.json(User)
          )
          .catch((err) => res.status(500).json(err));
      },
    // Delete a User
    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No User with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // add friend to user by id
    addFriend({ params }, res) {
      User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true, runValidators: true }
      )
          .then((user) =>
              !user
                  ? res.status(404).json({ message: 'User ID does not exist.' })
                  : res.json(user))
          .catch((error) => res.status(500).json(error));
  },
  // remove friend from user by id
  removeFriend({ params }, res) {
      User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true, runValidators: true }
      )
          .then(user =>
              !user
                  ? res.status(404).json({ message: 'User ID does not exist.' })
                  : res.json(user))
          .catch((error) => res.status(500).json(error));
  }
  };