var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});

app.get('/lucky', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My lucky number =  ' + num);
});

app.get('/input/:quote/:author', function(req,res){
    res.send ({
        quote : req.params.quote,
        author : req.params.author   
    });
});

app.listen(3000);
console.log("Running on port 3000");