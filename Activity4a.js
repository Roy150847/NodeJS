const fs = require('fs');
const zlib = require('zlib');

// Compress a file
const compressFile = (inputFilePath, outputFilePath, callback) => {
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', callback);
};

// Decompress a file
const decompressFile = (inputFilePath, outputFilePath, callback) => {
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', callback);
};

// Compare file sizes
const compareFileSizes = (filePath1, filePath2) => {
    const stats1 = fs.statSync(filePath1);
    const stats2 = fs.statSync(filePath2);

    console.log(Original file size: ${stats1.size} bytes);
    console.log(Decompressed file size: ${stats2.size} bytes);
    console.log(Compression ratio: ${(stats1.size / stats2.size).toFixed(2)}x);
};

// Example usage
const inputFile = 'input.txt';
const compressedFile = 'compressed.gz';
const decompressedFile = 'decompressed.txt';

// Compress the file
compressFile(inputFile, compressedFile, () => {
    console.log('File compressed successfully.');
    
    // Decompress the file
    decompressFile(compressedFile, decompressedFile, () => {
        console.log('File decompressed successfully.');

        // Compare file sizes
        compareFileSizes(inputFile, decompressedFile);
    });
});