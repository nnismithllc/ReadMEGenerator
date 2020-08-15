const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the name of this project?",
    name: "projectA",
  },
  {
    type: "input",
    message: "Please describe the functionality of the project in full detail.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please provide a Table of Contents here for your Project README file.",
    name: "contents",
  },
  {
    type: "input",
    message:
      "What are the steps and programs required to run your project? Please provide step by step instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What can the user use this project for? Please explain.",
    name: "usage",
  },
  {
    type: "list",
    message: "What licensing would you like to use for this project?",
    choices: [
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
      `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    ],
    name: "licensing",
  },
  {
    type: "input",
    message: "Who did you collaborate with on this project?",
    name: "credits",
  },
  {
    type: "input",
    message: "Have you tested your Project? Please run test.",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Do you have a merit badge?",
    choices: ["Yes", "No"],
    name: "badge",
  },
  {
    type: "input",
    message: "Do you have any questions?",
    name: "questionsA",
  },

  {
    //adds email to the "questions" section
    type: "input",
    message: "I can be reached at.",
    name: "email",
  },
];

// function writeToFile (README, data){}

// function generateMarkdown(answers) {
// }


function init() {
  inquirer
    .prompt(questions)
    .then((userAnswers) => {
      const readme = generateMarkdown(userAnswers);
      fs.writeFile("README.md", readme, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Successfully wrote to README.md");
      });
      console.log(userAnswers);
    })
    .catch((err) => console.log(err));
  //console.log(err);
}

init();
