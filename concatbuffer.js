var buff1 = new Buffer.from('Tony Stark');
var buff2 = new Buffer.from('Namaste Duniya');
var buff3 = Buffer.concat([buff1,buff2]);
console.log("buffer3 content: "+buff3.toString())