const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// GET all thoughts
router.route('/').get(getAllThoughts);

// GET a single thought by its _id
router.route('/:thoughtId').get(getSingleThought);

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.route('/').post(createThought);

// PUT to update a thought by its _id
router.route('/:thoughtId').put(updateThought);

// DELETE to remove a thought by its _id
router.route('/:thoughtId').delete(deleteThought);

module.exports = router;
