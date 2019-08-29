var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});

app.get('/input/:name/:email', function(req,res){
	console.log(req.params.name +", "+req.params.email)
    res.send ({
        name : req.params.name,
        email : req.params.email   
    });
});

app.listen(3000);
console.log("Running on port 3000");