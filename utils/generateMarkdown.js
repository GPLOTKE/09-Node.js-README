// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `## ${data.title}

    ## Table of Contents:
    - Description
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions

    ## Description:

    ${data.description}

    ## Installation:

    ${data.installation}

    ## Usage:

    ${data.usage}

    ## License:

    ${data.license}

    ## Contributing:

    ${data.contributing}

    ## Tests:

    ${data.tests}

    ## Questions:

    You can contact me with any questions at the following email address: ${data.email}
    You can find me on GitHub at https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;