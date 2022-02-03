const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const htmlTemplete = require('./src/htmlTemplete')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let developTeam = [];

console.log("Please Enter Team Manager Information");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter team manager’s name?",
    },
    {
      type: "input",
      name: "id",
      message: "Enter team manager’s employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter team manager’s email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter team manager’s office number?",
    },
  ])
  .then((answer) => {
    const managerInfo = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officeNumber
    );

    developTeam.push(createCard(managerInfo));

    nextQuestion();
  })

  .catch((err) => {
    console.log(err);
});

function nextQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "coworker",
        message: "Who would you like to add next?",
        choices: ["Engineer", "Intern", "Finished"],
      },
    ])
    .then((answer) => {
      // To take which user is used choice
      switch (answer.coworker) {
        case "Engineer":
          return engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "Finished":
          const htmlInfo = htmlTemplete(developTeam);
          writeToFile("./dis/developmenTeam.html", htmlInfo);
          break;
      }
    })

    .catch((err) => {
      console.log(err);
    });
}


function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Engineers' name?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Engineers' employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Team Engineers' email address?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Team Engineers' GitHub username?",
      },
    ])

    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );

      developTeam.push(createCard(engineer));

      nextQuestion();
    })
    .catch((err) => {
      console.log(err);
    });
}


function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Interns' name?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Interns' employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Team Interns' email address?",
      },
      {
        type: "input",
        name: "school",
        message: "Enter Team Interns' school?",
      },
    ])

    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );

      developTeam.push(createCard(intern));

      nextQuestion();
    })
    .catch((err) => {
      console.log(err);
    });
}


function createCard(teammember) {
  switch (teammember.getRole()) {
    case "Manager":
      return `<div class = "col-3 text-center" style="background-color: steelblue; height: 300px; border-style: solid; margin-top: 2%; margin-left: 5%; margin-bottom: 2%;">
            <h2 style= "color: red">${teammember.getRole()}</h2>  
            <h3>${teammember.getName()}</h3>
              
          <div>
              <div>ID: ${teammember.getId()}</div>
              <a href="mailto:${teammember.getEmail()}">Email: ${teammember.getEmail()}</a>
              <div>Office #: ${teammember.getofficeNumber()}</div>
          </div>
      </div>`;
      break;
    case "Engineer":
      return `<div class = "col-3 text-center" style="background-color: yellow; height: 300px; border-style: solid; margin-top: 2%; margin-left: 5%; margin-bottom: 2%;">
            <h2 style= "color: red">${teammember.getRole()}</h2>  
            <h3>${teammember.getName()}</h3>
          
            <div>
              <div>ID: ${teammember.getId()}</div>
              <a href="mailto:${teammember.getEmail()}">Email: ${teammember.getEmail()}</a> <br>
              <a href="https://github.com/${teammember.getGithub()}" target="_blank">Github: ${teammember.getGithub()}</a>
          </div>
      </div>`;
      break;
    case "Intern":
      return `<div class = "col-3 text-center" style="background-color: lightgreen; height: 300px; border-style: solid; margin-top: 2%; margin-left: 5%; margin-bottom: 2%;">
            <h2 style= "color: red">${teammember.getRole()}</h2>  
            <h3>${teammember.getName()}</h3>
          
          <div>
              <div>ID: ${teammember.getId()}</div>
              <a href="mailto:${teammember.getEmail()}">Email: ${teammember.getEmail()}</a>
              <div>School: ${teammember.getSchool()}</div>
          </div>
      </div>`;
      break;
  }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Standby Creating HTML File...");
    });
};