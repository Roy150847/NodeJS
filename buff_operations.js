// Compare buffer

var buffer1 = new Buffer.from("Messi");
var buffer2 = new Buffer.from("Ronaldo");
var result = buffer1.compare(buffer2);
if(result < 0) {
    console.log(buffer1 + " comes before " + buffer2);
} else if (result == 0) {
    console.log(buffer1 + " is same as " + buffer2);
} else {
    console.log(buffer1 + " comes after " + buffer2);
}


// Copy buffer

var buffer1 = new Buffer.from("Messi");
var buffer2 = new Buffer.alloc(5);

buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());



// Slice buffer

var buffer1 = new Buffer.from("Messi - is the GOAT");
var buffer2 = buffer1.slice(0,8);
var buffer3 = buffer1.slice(11,20);
var buffer4 = Buffer.concat([buffer2,buffer3]); //  Concatenate two buffers

console.log("buffer2 content: " + buffer2.toString());
console.log("buffer3 content: " + buffer3.toString());
console.log("buffer4 content: " + buffer4.toString());


// 