// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.questionsA}
  
## Table of Contents 
* [description](#Description)
* [contribution](#Credits)  
* [installation](#Installation)
* [usage](#Usage)
* [testing](#Testing)

## Description: 
${data.description} 
  
## Installation 
  
${data.installation} 

## Licence

${data.licensing}

## Usage 
  
${data.usage}

## Contribution:

${data.credits} 
  
## Questions?
* **Do you have a question?** ${data.questionsA}
* **Im also available via email here:** [Email me!](${data.email}) 
  
## Badge 
  
${data.badge}
  
## Testing 
  
${data.test}

`;
}

module.exports = generateMarkdown;
