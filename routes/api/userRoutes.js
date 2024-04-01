const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require('../../controllers/userController');

// GET all users
router.route('/').get(getUsers);

// GET a single user by its _id and populated thought and friend data
router.route('/:userId').get(getUserById);

// POST a new user
router.route('/').post(createUser);

// PUT to update a user by its _id
router.route('/:userId').put(updateUserById);

// DELETE to remove user by its _id
router.route('/:userId').delete(deleteUserById);

module.exports = router;
