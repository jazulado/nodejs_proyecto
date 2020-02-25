//var express = require('express');
import express from 'express'
import mongoose from 'mongoose'
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cursos",{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  app.listen(3000,() => {
    console.log('Example app listening on port 3000!');
  });
  app.get('/', function (req, res) {
    let nombre = "julian"
    let apellido = "usuga"
    res.send(`El nombre es: ${nombre} y apellido ${apellido}`);
  });
}).catch((error) => {
  app.listen(3000,() => {
    console.log('App error ' + error);
});

})
app.get('/api', function (req, res) {
  let nombre = "julian"
  let apellido = "usuga"
  res.send(`El nombre es: ${nombre} y apellido ${apellido}`);
});


//git push -u origin master
//cmdkey /delete:LegacyGeneric:target=git:https://github.com