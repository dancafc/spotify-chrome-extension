/* Load the HTTP library */
const http = require("http");
const express = require('express');

const port = 8888;
const app = express();
const fs = require("fs");
const { response } = require("express");


/* Create an HTTP server to handle responses */
app.get('/', (request, response) => {
  response.sendFile(__dirname+'/views/home.html');
});

app.get('/login', (request, response) => {
  response.send('Welcome!');
});


app.listen(port, (error) => {
  if (error) {
    return console.log('something has errored', error);
  }
  console.log(`server is listening on port ${port}`);
});
