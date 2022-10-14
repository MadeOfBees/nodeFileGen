const fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var licenseChoices = data.split('\r\n')
    licenseChoices.forEach(string => {
        string.trim()
    })
    const lcWrappedInQuotes = licenseChoices.map(licenseChoices => `"${licenseChoices}"`);
    const finalArray = `[${lcWrappedInQuotes}]`
    fs.writeFile('array.txt', `${finalArray}`, (err) =>
    err ? console.error(err) : console.log('Created array.txt file')
    );
  });
