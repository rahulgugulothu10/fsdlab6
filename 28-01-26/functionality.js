const os = require('os');
console.log(os.platform());
console.log(os.totalmem());
//path module
console.log("path module:")
const path = require('path');
console.log(path.basename(__filename));
console.log(path.extname(__filename));
//util module
console.log("util module:")
const util = require('util');
const name = 'Node';
console.log(util.format('Hello %s', name));
//event module
console.log("event module:")
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayHello', () => {
console.log('Hello Event');
});

event.emit('sayHello');