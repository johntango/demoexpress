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
app.post('/input', function(req,res){
	console.log(JSON.stringify(req.body));
    res.send ({
        name : req.body.name,
        email : req.body.email   
    });
});

app.listen(3000);
console.log("Running on port 3000");