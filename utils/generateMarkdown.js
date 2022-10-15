var lice
var badges = ["[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)","[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)","[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",]
var licLink = ["https://creativecommons.org/licenses/","https://www.eclipse.org/legal/epl-2.0/","https://www.gnu.org/licenses/gpl-3.0.en.html","https://api.github.com/licenses/isc","https://api.github.com/licenses/MIT","https://www.mozilla.org/en-US/MPL/",]
var uBadge
var uLicLink
var renderedLicence
var nolic = 0;

function renderLicenseBadgeAndLink(lice) {
  switch (lice) {
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
      nolic = 1;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lice) {
  renderLicenseBadgeAndLink(lice)
  if (!nolic>0) {
    renderedLicence = (`${uBadge}\n Using the ${lice} licence: ${uLicLink}`)
  }else renderedLicence = ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
  console.log(`#name \n ${info.name} \n`);
  console.log(`#description \n ${info.description} \n`);
  console.log(`#install \n ${info.install} \n`);
  console.log(`#report \n ${info.report} \n`);
  console.log(`#tests \n ${info.tests} \n`);
  console.log(`#support \n ${info.support} \n`);
  console.log(`#username \n ${info.username} \n`);
  console.log(`#email \n ${info.email} \n`);
  
  lice = info.license;
  renderLicenseSection(lice)
  console.log(renderedLicence)
}

module.exports = generateMarkdown;