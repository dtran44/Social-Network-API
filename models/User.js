const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true, // Trimmed
      unique: true, // Unique
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true, // Unique
      validate: [isEmail, 'Invalid email address'], // Must match a valid email address
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Array of _id values referencing the Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Array of _id values referencing the User model (self-reference)
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
