var selectedLicence
var badges = ["[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)","[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)","[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",]
var licLink = ["https://creativecommons.org/licenses/","https://www.eclipse.org/legal/epl-2.0/","https://www.gnu.org/licenses/gpl-3.0.en.html","https://api.github.com/licenses/isc","https://api.github.com/licenses/MIT","https://www.mozilla.org/en-US/MPL/",]
var uBadge
var uLicLink
var renderedLicence
var noLicence = 0;
// Made rendering badges/links the same function based around a single switch case to avoid redundant code, gotta stay DRY.
// This function checks which licence the user's selected then returns the correct badge to add to the readme and the correct link to learn more about this licence.
function renderLicenseBadgeAndLink(selectedLicence) {
  switch (selectedLicence) {
    case 'Creative Commons':
      uBadge = badges[0];
      uLicLink = licLink[0];
      break;
    case 'Eclipse Public License':
      uBadge = badges[1];
      uLicLink = licLink[1];
      break;
    case 'GNU General Public License':
      uBadge = badges[2];
      uLicLink = licLink[2];
      break;
    case 'ISC':
      uBadge = badges[3];
      uLicLink = licLink[3];
      break;
    case 'MIT':
      uBadge = badges[4];
      uLicLink = licLink[4];
      break;
    case 'Mozilla Public License':
      uBadge = badges[5];
      uLicLink = licLink[5];
      break;
    case `No license please`:
      noLicence = 1;
      break;
  }
}

// TODO:A function that returns the license section of README, If there is no license, renderedLicence returns an empty string
function renderLicenseSection(selectedLicence) {
  renderLicenseBadgeAndLink(selectedLicence)
  if (!noLicence>0) {
    renderedLicence = (`${uBadge}\n Using the ${selectedLicence} licence: ${uLicLink}`)
  }else renderedLicence = ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
  selectedLicence = info.license;
  renderLicenseSection(selectedLicence)
  printMe =
    `# ${info.name} \n
    \r## Description: \n ${info.description} \n
    \r## Installation instructions: \n ${info.install} \n
    \r## Report an issue: \n ${info.report} \n Or send an email to ${info.email} discribing your your bug and how to replicate the issue\n
    \r## Tests done for this repo:\n ${info.tests} \n
    \r## Support me: \n This project was made by ${info.username} (https://github.com/${info.username}), if you want to support this project: ${info.support}, feel free to email me @${info.email} \n
    \r## Licence \n ${renderedLicence} \n`;  
    module.exports=printMe;
}
module.exports = generateMarkdown;