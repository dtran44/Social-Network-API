const names = [
    'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith', 'Jones', 'Coollastname', 'enter_name_here', 'Ze', 'Zechariah', 'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi', 'Zhong', 'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel', 'Xander', 'Jared', 'Courtney', 'Gillian', 'Clark', 'Jared', 'Grace', 'Kelsey', 'Tamar', 'Alex', 'Mark', 'Tamar', 'Farish', 'Sarah', 'Nathaniel', 'Parker'
  ];
  
  const randomThoughts = [
    'Eureka moment',
    'Profound realization',
    'Quirky thought',
    'Out-of-the-box idea',
    'Sudden epiphany',
    'Random musing',
    'Whimsical notion',
  ];
  
  const randomReactions = [
    'Unexpected reaction',
    'Spontaneous insight',
    'Inexplicable reaction',
    'Creative spark',
    'Surprising revelation',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Generates a random email address
  const getRandomEmail = () => {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const randomName = names[Math.floor(Math.random() * names.length)].toLowerCase();
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const randomNumber = Math.floor(Math.random() * 1000); // Add a random number
  return `${randomName}${randomNumber}@${domain}`;
};
  
  // Gets a random full name
  const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Generates random friends for a user
  const getRandomFriends = (int) => {
    const friends = [];
    for (let i = 0; i < int; i++) {
      friends.push(getRandomName());
    }
    return friends;
  };
  
  // Function to generate random thoughts
  const getRandomThoughts = (int) => {
    const thoughts = [];
    for (let i = 0; i < int; i++) {
      thoughts.push(getRandomArrItem(randomThoughts));
    }
    return thoughts;
  };
  
  // Function to generate random reactions
  const getRandomReactions = (int) => {
    const reactions = [];
    for (let i = 0; i < int; i++) {
      reactions.push(getRandomArrItem(randomReactions));
    }
    return reactions;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomEmail, getRandomFriends, getRandomThoughts, getRandomReactions };
  