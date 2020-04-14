const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
 
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
 
app.get('/', (req, res) =>{
    let people = ["juan","camilo","julian","John"];
    let datos = {name: "Juan", lastname: "zabala s", people:people};
    res.render('home',datos);
});
 
app.listen(3000,()=>{
    console.log("Server on port 3000");
});