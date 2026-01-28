const fs = require('fs');

fs.writeFileSync('input.txt', 'This is some sample text for input.txt');
fs.writeFileSync('output.txt', ''); 

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
