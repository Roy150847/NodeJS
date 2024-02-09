var fs = require("fs");
// Create a readble stream 
var reader = fs.createReadStream('test.txt');
// Create a writeable stream
var writer = fs.createWriteStream('text1.txt');
writer.on('pipe', () => {
    console.log('Something is piping into the writer');
});
reader.pipe(writer);
