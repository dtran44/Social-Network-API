const { User } = require('../models');

// POST to add a new friend to a user's friend list
async function addFriend(req, res) {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the friend is already in the user's friend list
    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend already exists in the user\'s friend list' });
    }

    // Add the friend to the user's friend list
    user.friends.push(friendId);
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// DELETE to remove a friend from a user's friend list
async function removeFriend(req, res) {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the friend exists in the user's friend list
    if (!user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend does not exist in the user\'s friend list' });
    }

    // Remove the friend from the user's friend list
    user.friends = user.friends.filter(id => id !== friendId);
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  addFriend,
  removeFriend
};
