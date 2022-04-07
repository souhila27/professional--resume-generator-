// TODO: Create a function that returns a license badge based on which license is passed in
const chooseBadge = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
![apache](https://img.shields.io/badge/license-Apache%20License%202.0-blue)
    `;
  } else if (licenseChoice == 'ISC License') {
    return `
![isc](https://img.shields.io/badge/license-ISC%20License-purple)
    `;
  } else {
    return `
![mit](https://img.shields.io/badge/license-MIT%20License-red)
    `;
  }
}
const chooseLicense = licenseChoice => {
  if (licenseChoice == 'Apache License 2.0') {
    return `
This application is covered by the Apache v2.0 License, the terms of which can be found [here](https://www.apache.org/licenses/LICENSE-2.0.txt).
    `;
  } else if (licenseChoice == 'ISC License') {
    return `
This application is covered by the ISC License, the terms of which can be found [here](https://opensource.org/licenses/ISC).
    `;
  } else {
    return `
This application is covered by the MIT License, the terms of which can be found [here](https://opensource.org/licenses/MIT).
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${chooseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

   ## Usage
   ${data.usage}
  
  ## License
  ${chooseLicense(data.license)}
 
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  ## Contribute
  ${data.contribution}
  
  ## Tests
  ${data.test}
  ## Questions
 [GitHub Profile](https://github.com/${data.userName}/) 
 ${data.email}

`;
}

module.exports = generateMarkdown;
