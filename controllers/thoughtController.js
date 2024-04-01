const { User, Thought } = require('../models');

// GET all thoughts
async function getAllThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET a single thought by its _id
async function getSingleThought(req, res) {
  const thoughtId = req.params.thoughtId;
  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// POST to create a new thought
async function createThought(req, res) {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const thought = await Thought.create(req.body);
    user.thoughts.push(thought._id); // Push the created thought's _id to the associated user's thoughts array field
    await user.save();

    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// PUT to update a thought by its _id
async function updateThought(req, res) {
  const thoughtId = req.params.thoughtId;
  try {
    const updatedThought = await Thought.findByIdAndUpdate(thoughtId, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// DELETE to remove a thought by its _id
async function deleteThought(req, res) {
  const thoughtId = req.params.thoughtId;
  try {
    const deletedThought = await Thought.findByIdAndDelete(thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
};
