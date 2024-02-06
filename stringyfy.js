// read data from student.json

/*
const { json } = require("express/lib/response");
const fs = require("fs");

fs.readFile('student.json',(err,data)=>{
    if(err) throw err;

    let student = JSON.parse(data);
    console.log(JSON.stringify(student,null,10));

    // console.log(JSON.stringify(student,['marks'],2));

    console.log(student);
})

*/


// write data into student2.json

const fs = require("fs");
const value = {
    Name : "MG Hector", Type: "Electric",
    Fuctions:{
        Speed:"240km/h",
        Speaker:"Dolby Atmos",
        Airbags:"10",
        Sunroof:"Present",
        Capacity:"7"
    }
}

let data = JSON.stringify(value,null,2);

fs.writeFile('student2',data,(err)=> {
    if(err) throw err;
    console.log("Data written into file")
})