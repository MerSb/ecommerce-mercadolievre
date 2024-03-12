const express = require('express');
let router = express.Router();
const path = require('path');
let controller = require("../controllers/user");

router.get('/register', controllerUsers.register)

router.get('/login', controllerUsers.login)




module.exports = router