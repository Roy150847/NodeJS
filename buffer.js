//write buffer

buf = new Buffer.alloc(256);
len = buf.write("NAmaste duniya");
console.log("Octets written: "+len);

// Read buffer

for(var i=0;i<26;i++){
    buf[i] = i+65;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

var json = buf.toJSON(buf);
console.log(json);