const fs = require('fs');

fs.readFile('temp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var licenseChoices = data.split('\r\n')
    licenseChoices.forEach(string => {
        string.trim()
    })
    
    fs.appendFile('log.txt', `${licenseChoices}`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
  });