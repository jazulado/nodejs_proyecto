const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose  = require('mongoose');
const path = require('path');
const app = require('./app');
//
 
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));

mongoose.Promise = global.Promise;
 



mongoose.connect("mongodb+srv://dbJulian:05n3YJ2fd5GXRSfG@cluster0-9hsez.gcp.mongodb.net/medical?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conexión correcta");
    app.listen(3000, () => {
        console.log('Example app listening on server!');
    });

}).catch((error) =>{
    console.log(error);
})