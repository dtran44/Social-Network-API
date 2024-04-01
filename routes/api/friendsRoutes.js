const router = require('express').Router();
const {
  addFriend,
  removeFriend
} = require('../../controllers/friendController.js');

// POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);

// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
