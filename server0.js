// Purpose: A simple server that listens on port 3000 and returns a simple message
// routes f1 and f2 return different colors

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});
app.get('/f1', function(req, res) {
    res.send('<body bgcolor= "red">');
});
app.get('/f2', function(req, res) {
    res.send('<body bgcolor= "green">');
});


app.listen(3000);
console.log("Running on port 3000");