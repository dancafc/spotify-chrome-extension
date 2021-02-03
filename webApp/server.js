/* Load the HTTP library */
const http = require("http");
const express = require('express');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

const port = 8888;
const app = express();
const fs = require("fs");
const { response } = require("express");

/* Allow us to use files in public/js */
app.use(express.static(path.join(__dirname, 'public')));

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
