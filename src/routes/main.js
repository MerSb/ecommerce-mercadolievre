const express = require('express');
let router = express.Router();
const path = require('path');
let controller = require("../controllers/main");

//routes//
router.get('/', controller.home);
//router.get('/contact', controller.contact);
//router.get('/about' , controller.about);



module.exports = router