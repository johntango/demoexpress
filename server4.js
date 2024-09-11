// Here we stored the names and emails in an array and displayed them on the web page.
// This is a typical use case for a web server, where we store data in a datastore on WS and display it to the user.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

const port = 3000;

// Array to store names and emails
let users = [];

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the web page with the form
app.get('/', function(req, res) {
    let userList = users.map(user => `<li>${user.name} (${user.email})</li>`).join('');
    
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
            <h2>Submitted Users:</h2>
            <ul>${userList}</ul>
        </body>
        </html>
    `);
});

// Handle the form submission
app.post('/input', function(req, res){
    const name = escape(req.body.name);
    const email = escape(req.body.email);

    // Add the new user to the array
    users.push({ name: name, email: email });

    // Redirect back to the home page
    res.redirect('/');
});

// Start the server
app.listen(3000);
console.log("Running on port 3000");    