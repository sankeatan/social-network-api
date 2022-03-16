const reactions = [

    'Like',
    'Love',
    'Disagree',
    'Sad',
    'Angry',
    'Care',
    'Interesting',
  
  ];
  
  const usernames = [
  
      'Cameron',
      'Ryan',
      'Courtney',
      'Damon',
      'Mary',
      'Jim',
      'Tyler',
      'Maria',
      'Lauren',
      'Brad',
      'Carlos',
      'Timothy',
      'Mark',
      'Bob',
      'Casandra',
      'John',
      'Allie',
      'Alex',
      'Eric',
      'Brian',
      'Alejandro',
      'Billy',
      'Helen',
      'Mia',
      'Tim',
      'Nathan',
      'Joel',
      'Malinda',
      'Craig',
      'Sophie',
      'Alan',
      'Koda',
      
    ];
    
    
    const thoughts = [
  
      'I love Chickens!',
      'Koda is a great name',
      'How about that game on Saturday?',
      'Come play with us in the metaverse, forever and ever and ever',
      'Celeberity Gossip',
      'Social Movement!',
      'Stand with Y-Country!',
      'Wordle',
      'Witty pun',
      'Controversial Political Opinion!',
      'A More Different Political Opinions!'
  
    ]
    const randomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    const randomThought = () => {
      const result = {
        thoughtText: randomArrayItem(thoughts),
        username: randomArrayItem(usernames),
        reactions: {
          reactionBody: randomArrayItem(reactions),
          username: randomArrayItem(usernames),
        },
      };
      return result;
    };
    
    const randomName = () =>
      `${randomArrayItem(usernames)}`;
    
    module.exports = { randomName, randomThought };