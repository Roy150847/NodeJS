// const fs = require('fs');
// function modifyFile(filename, modification) {
//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }

//         modification(data);

//         fs.writeFile(filename, data, (err) => {
//             if (err) {
//                 console.error('Error writing file:', err);
//                 return;
//             }
//             console.log('File has been modified and saved successfully.');
//         });
//     });
// }

// const filename = 'input.txt';

// modifyFile(filename, (data) => {
//     // Convert the data to uppercase
//     data = data.toString().toUpperCase();
// });



const fs = require('fs');

// Read binary data from a file
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Read binary data:', data);
});

// Write binary data to a file
const binaryData = Buffer.from('Hello, world!', 'utf8'); // Convert string to binary data
fs.writeFile('input.txt', binaryData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Binary data written to output.bin');
});
