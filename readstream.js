var fs = require("fs");
const data = "Namaste Duniya!!"
//create a readable stream
var writer = fs.createWriteStream("test.txt");
//write data into the stream wirh encoding UTF-8
writer.write(data,"UTF8");
//mark the end of the file
writer.end();
//handle stream events --> finish and error
writer.on("finish",function(){
    console.log("Write completed");
});
writer.on("error",function(err){
    console.error(err);
});
