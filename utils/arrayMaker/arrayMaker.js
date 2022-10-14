const fs = require('fs');
fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var input = data.split('\n');
    const wQuotes = input.map(input => `"${input}"`);
    const finalArray = `[${wQuotes}]`;
    fs.writeFile('array.txt', `${finalArray}`, (err) => err ? console.error(err) : console.log('Created in array.txt'));
});