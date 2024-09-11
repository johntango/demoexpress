// Here we store the web page un public directory and serve it using express.static.
const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html');

const app = express();
const port = 3000;

// Array to store names and emails
let users = [];

app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the web page with the form
// note __dirname is the directory in which node Web Server is running 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index1.html');
});

// Handle the form submission via fetch
app.post('/input', function(req, res){
    const name = escape(req.body.name);
    const email = escape(req.body.email);

    // Add the new user to the array
    users.push({ name: name, email: email });

    // Send the updated list of users back as JSON
    res.json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
// This code is similar to the previous example, but it uses the fetch API to submit the form data asynchronously.