var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});

app.get('/lucky', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My lucky number =  ' + num);
});

app.post('/input', function(req,res){
	console.log(JSON.stringify(req.body));
    res.send ({
        quote : req.body.quote,
        author : req.body.author   
    });
});

app.listen(3000);
console.log("Running on port 3000");