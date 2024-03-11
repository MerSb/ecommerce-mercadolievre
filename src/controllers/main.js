const path = require('path');
const data =require('../models/productData.json');


const controller = {
    home: (req, res) =>{
        const { results } = models;
        // res.sendFile(path.resolve(__dirname, '../views/home.html'))}, antiguo
        res.render('home', {data: results})
    }

}



module.exports = controller