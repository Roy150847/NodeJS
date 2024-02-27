const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    try {
        // Parse JSON string to object
        const data = JSON.parse(jsonString);

        // Modify the content
        data.key_to_modify = 'new_value';

        // Write the changes back to the file
        fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
            if (err) {
                console.log("Error writing file:", err);
                return;
            }
            console.log('Changes saved successfully!');
        });

    } catch (err) {
        console.log('Error parsing JSON string:', err);
    }
});
