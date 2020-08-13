var inquirer = require("inquirer");
var fs = require('fs');
var readMe =fs.readFileSync ('readMe.text',"utf-8" );

// array of questions for user
inquirer.prompt([
{
    type: "input",
    name: "project",
    message: "What is the name of this project?"
    
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the functionality of the project in full detail."
    
  },
  {
    type: "input",
    name: "contents",
    message: "Please provide a Table of Contents here for your Project README file."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps and programs required to run your project? Please provide step by step instructions?"
    
  },
  {
    type: "input",
    name: "usage",
    message: "What can the user use this project for? Please explain."
  },
  {
    type: "list",
    name: "licensing",
    message: "What licensing would you like to use for this project?",
    choices: [
        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
         `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
          `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
           `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`]
},   
{
  type: "input",
  name: "credits",
  message: "Who did you collaborate with on this project?"
},
{
  type: "input",
  name: "test",
  message: "Have you tested your Project? Please run test."
},
{
  type: "checkbox",
  name: "badge",
  message: "Do you have a merit badge?",
  choices: [
    "Yes", 
    "No"
  ]
},
{
  type: "input",
  name: "questions",
  message: "Do you have any questions?"
},

{
  //adds email to the "questions" section 
type: "input",
name: "email",
message: "I can be reached at."
},


]) .then(function(response) {
  const title = response.project;
  const description = response.description;
  const contents = response.contents;
  const installation = response.installation;
  const usage = response.usage;
  const license = response.license;
  const badge = response.badge;
  const test = response.tests;
  const credits = response.credits;
  const questions = response.questions;
  const email = response.email;
  const markDown = 
 `## ${title}
  
${license}
  
## Table of Contents 
* [description](#Description)
* [contribution](#Credits)  
* [installation](#Installation)
* [usage](#Usage)
* [testing](#Testing)

## Description: 
${description} 
  
  
## Contribution:
${credits} 
  
## Questions?
* **Please check out:** ${questions}
* **Im also available via email here:** [Email me!](${email}) 
  
  
## Installation 
  
${installation} 
  
## Usage 
  
${usage}

## Badge 
  
${badge}
  
## Testing 
  
${test}`; 
}

// function to write README file
fs.writeFile("README.md", markDown, function(err) {
      
  if (err) {
    return console.log(err);
  } else {
  console.log("Success!");
}


})

})


// function to initialize program
function init() {

}

// function call to initialize program
init();
