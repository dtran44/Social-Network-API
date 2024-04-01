const { Schema, model, Types } = require('mongoose');

// Schema to create a reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId, // Use Mongoose's ObjectId data type
      default: () => new Types.ObjectId(), // Default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true, 
      maxlength: 280, 
    },
    username: {
      type: String,
      required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to the current timestamp
      get: (createdAt) => createdAt.toLocaleString(), // Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
