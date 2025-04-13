const EventEmitter = require('events');

const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('sighting', (location) => {
  console.log(`Celebrity spotted at ${location}!`);
});

// Subscribe to celebrity for Observer 2
celebrity.on('sighting', (location) => {
  console.log(`Another observer saw the celebrity at ${location}!`);
});

celebrity.emit('sighting');
