const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, emial, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    gitRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;