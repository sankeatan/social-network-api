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
    const randomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    const randomThought = () => {
      const result = {
        thoughtText: randomArrItem(thoughts),
        username: randomArrItem(usernames),
        reactions: {
          reactionBody: randomArrItem(reactions),
          username: randomArrItem(usernames),
        },
      };
      return result;
    };
    
    const randomName = () =>
      `${randomArrItem(usernames)}`;
    
    module.exports = { randomName, randomThought };