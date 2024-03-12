const path = require('path');
const fs = require('fs');

const productDataPath = path.resolve(__dirname, '../models/productData.json');

const controller = {
    home: (req, res) => {
        // Leer el archivo JSON
        fs.readFile(productDataPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo de datos de productos:', err);
                return res.status(500).send('Error interno del servidor');
            }

            try {
                // Convertir los datos JSON a un objeto JavaScript con el parse
  
                const productData = JSON.parse(data);
                
                // Aquí puedes utilizar los datos de los productos como lo necesites
                res.render('home', { data: productData.results });
            } catch (error) {
                console.error('Error al parsear el archivo JSON de datos de productos:', error);
                return res.status(500).send('Error interno del servidor');
            }
        });
    }
    // contact: (req, res) =>{
      //  res.render('contact');
        
    //}
    
    // about: (req, res) =>{
        // res.render('about');
    //}
};

module.exports = controller;

//const controller = {
   // home: (req, res) => {
    //    const{results} = data;
    //    res.render('home',{data: results})};

    //otra forma de hacerlo//