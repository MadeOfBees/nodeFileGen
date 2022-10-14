const fs = require('fs');

fs.readFile('temp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var licenseChoices = data.split('\r\n')
    licenseChoices.forEach(string => {
        string.trim()
    })
    const lcWrappedInQuotes = licenseChoices.map(licenseChoices => `"${licenseChoices}"`);
    const finalArray = `[${lcWrappedInQuotes}]`
    fs.writeFile('log.txt', `${finalArray}`, (err) =>
    err ? console.error(err) : console.log('Created log.txt file')
    );
  });
