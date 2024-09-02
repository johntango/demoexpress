var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form on the root route
app.get('/', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Submit Your Details</title>
        </head>
        <body>
            <h1>Enter Name and Email</h1>
            <form action="/input" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

// Handle the form submission on the /input route
app.post('/input', function(req, res){
    const { name, email } = req.body;
    console.log(name + ", " + email);
    res.send({
        name: name,
        email: email
    });
});

// Start the server
app.listen(3000);
console.log("Running on port 3000");