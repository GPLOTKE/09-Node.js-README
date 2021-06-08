// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    } else if (license === 'None') {
        return ''
    } else if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC'
    } else if (license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'GNU_GPLv3') {
        return 'https://opensource.org/licenses/GPL-3.0'
    }
}

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

    You can contact me with any questions at the following:
    
        - Email: ${data.email}
    
        - GitHub: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;