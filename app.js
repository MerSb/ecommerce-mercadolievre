const express = require('express');


let methodOverride = require('method-override');
const path = require('path');

//express
const app = express();

//middleware
app.use(express.static(path.join(__dirname, '../public') ));


app.use(methodOverride('_method'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//template Engine//
app.set('view engine', 'ejs')
app.set('views', (__dirname, 'src/views'));

const mainRouter = require('./routes/main');
app.use('/', mainRouter);

const PORT = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on port: http://localhost:${PORT}`) )



module.exports = app;