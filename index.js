const fs = require ('fs');
const inquirer = require('inquirer');
const jest = require('jest');

function (){
    console.log("Please Enter Team Manager Information");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Name',
            message: "Enter team manager’s name?"
        },
        {
            type: 'input',
            name: 'Id',
            message: "Enter team manager’s employee ID?"
        },
        {
            type: 'input',
            name: 'Email',
            message: "Enter team manager’s email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter team manager’s office number?"
        }
    ])