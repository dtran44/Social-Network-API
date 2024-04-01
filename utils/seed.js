const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { Types: { ObjectId } } = require('mongoose');
const { getRandomName, getRandomThoughts, getRandomEmail, getRandomFriends, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  
  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let reactionCheck = await connection.db.listCollections({ name: 'reactions' }).toArray();
  if (reactionCheck.length) {
    await connection.dropCollection('reactions');
  }

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    const emails = getRandomEmail(1); // Generate random emails
    const friends = getRandomFriends(1).map(() => new ObjectId()); // Generate random ObjectIDs for friends using new ObjectId()

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const username = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      username,
      emails,
      friends
    });
  }

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  // Create empty array to hold the thoughts, add thoughts to array & add to collection
  const thoughts = [];
  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThoughts(); // Generate random thoughts
    
    thoughts.push({
      thoughts
    });
  }
  const thoughtData = await Thought.insertMany(thoughts);

 // Create empty array to hold the reactions, add reactions to array & add to collection
 const reactions = [];
 for (let i = 0; i < 20; i++) {
   const reactions = getRandomReactions(); // Generate random reactions
  
   reactions.push({
     reactions
   });
 }
 const reactionsData = await Reaction.insertMany(reactions);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
