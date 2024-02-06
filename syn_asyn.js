
var fs =  require("fs");



 // Asynchronus read
 fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronus read: "+data.toString());
});



// Synchronus read
var data = fs.readFileSync('input.txt');
console.log("Synchronus read: "+data.toString());
console.log("Program ended");




// Asynchronus - Opening File
console.log("Going to open file...");
fs.open('input.txt', 'r+', function(err,fd) {
    if(err){
        return console.error(err);
    }
    
    console.log("File opened successfully!");
});




console.log("Going to get file info...");

fs.stat('input.txt', function(err,stats) {
    if(err){
        return console.error(err);
    }

console.log(stats);
console.log("Got file info successfully!");

// Check file type
console.log("isFile ? " + stats.isFile());
console.log("isDirectory ? " + stats.isDirectory());
});



console.log("Going to write into existing file...");
fs.writeFile('input.txt', 'Simply easy learning!', function(err) {
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data...");

    fs.readFile('input.txt', function(err,data) {
        if(err){
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});


var buff = new Buffer(1024);

console.log("Going to open an existing file...");
fs.open('input.txt', 'r', function(err,fd) {
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");

    fs.read(fd, buff, 0, buff.length, 0, function(err,bytes,) {
        if(err){
            console.error(err);
        }
        console.log(bytes + " bytes read");


        //Print only the bytes read to avoid junk
        if(bytes > 0) {
            console.log(buff.slice(0, bytes).toString());
        }


        //close the opened file
        fs.close(fd, function(err){
            if(err){
                console.error(err);
            }
            console.log("File closed successfully!");
        });
    });
});