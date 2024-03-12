const path = require('path');
const fs = require('fs');

const controllerUsers = {
    register: (req, res) =>{
        res.render('register');
    },
    login: (req, res) =>{
        res.render('login');
    }
}
    
module.exports = controllerUsers