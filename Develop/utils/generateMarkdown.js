// Function to Generate Markdown Answer Data for README File
function generateMarkdown(data) {
  return `
## ${data.projectA}
  
## Table of Contents 
* [description](#Description)
* [contribution](#Credits)  
* [installation](#Installation)
* [usage](#Usage)
* [testing](#Testing)

## Description: 
${data.description} 

## Licence

${data.licensing}

## Installation 
  
${data.installation} 

## Usage 
  
${data.usage}

## Contribution:

${data.credits} 
  
## Questions?
* **Want to reach me? Check out my Github page.** [GitHub] ${data.questionsA}
* **Im also available via email here:** [Email me!](${data.email}) 
  
## Badge 
  
${data.badge}
  
## Testing 
  
${data.test}

`;
}

// Exports Data to README.md File
module.exports = generateMarkdown;
