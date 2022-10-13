const fs = require('fs');

fs.readFile('temp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + 'temp.txt');
    console.log(data)
    var licenseChoices = data.split(',\r\n')
    console.log(licenseChoices)
    licenseChoices.forEach(string => {
        string.trim()
    })
    console.log(licenseChoices)
  });