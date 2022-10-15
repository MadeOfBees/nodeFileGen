var lice
var badges = ["[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)","[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)","[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",""]
var uBadge
function renderLicenseBadge(lice) {
  switch (lice) {
    case 'Creative Commons':
      uBadge = badges[0];
      break;
    case 'Eclipse Public License':
      uBadge = badges[1];
      break;
    case 'GNU General Public License':
      uBadge = badges[2];
      break;
    case 'ISC':
      uBadge = badges[3];
      break;
    case 'MIT':
      uBadge = badges[4];
      break;
    case 'Mozilla Public License':
      uBadge = badges[5];
      break;
    case `No license please`:
      uBadge = badges[6];
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
  console.log(`# ${info.name}`);
  console.log(`# ${info.description}`);
  console.log(`# ${info.install}`);
  console.log(`# ${info.report}`);
  console.log(`# ${info.tests}`);
  console.log(`# ${info.support}`);
  console.log(`# ${info.username}`);
  console.log(`# ${info.email}`);
  lice = info.license;
  renderLicenseBadge(lice)
}

module.exports = generateMarkdown;
