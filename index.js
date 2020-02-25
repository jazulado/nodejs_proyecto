//var express = require('express');
import express from 'express'
import mongoose from 'mongoose'
import app from './app'

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/cursos",{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  app.listen(3000,() => {
    console.log('Example app listening on port 3000!');
  });
}).catch((error) => {
    app.listen(3000,() => {
      console.log('App error ' + error);
  });
})


//git push -u origin master
//cmdkey /delete:LegacyGeneric:target=git:https://github.com