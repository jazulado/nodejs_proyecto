//var express = require('express');
import express from 'express'
var app = express();


app.get('/api', function (req, res) {
  let nombre = "julian"
  let apellido = "usuga"
  res.send(`El nombre es: ${nombre} y apellido ${apellido}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//git push -u origin master
//cmdkey /delete:LegacyGeneric:target=git:https://github.com