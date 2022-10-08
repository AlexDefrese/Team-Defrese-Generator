const Manager = import('./lib/Manager');
const Engineer = import('./lib/Engineer');
const Intern = import('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const outputPath = path.join('/dist', '/team.html');
const generateTeam = require('./src/template.js');


teamArray = [];

function runApp () {
    function createTeam () {
        inquirer.createPromptModule([{
            type: 'list',
            message: 'Which type of employee would you like to add?',
            name: 'addEmployeePrompt',
            choices: ['Manager', 'Engineer', 'Intern', 'No one else at this time.']
        }]).then(function (userInput){
            switch(userInput.addEmployeePrompt) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;

                default:
                    htmlBuilder();

            }
        })
    }

    function addManager() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter a name for the manager.'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Please enter an ID number.'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter an email address.'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter an office number.'
            },
            
        ]).then(answers => {
            const managerInput = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(managerInput);
            createTeam();
        });
    }

    function addEngineer (){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Please enter a name for the engineer.'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Please enter an ID number.'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter an email address.'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter their GitHub username'
            }
        ]).then(answers => {
            const engineerInput = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineerInput);
            createTeam();
        });
    }

    function addIntern (){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: 'Please enter a name for the intern.'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Please enter an ID number.'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter an email address.'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Please enter the name of their school.'
            }
        ]).then(answers => {
            const internInput = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(internInput);
            createTeam();
        });
    }

    function htmlBuilder () {
        console.log('Team successfully created.')

        fs.writeFileSync(outputPath, generateTeam(teamArray), 'UTF-8')
    }

    createTeam();
}

runApp();