const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html');

const app = express();
const port = 3001;

// Array to store names and emails
let users = [];

app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the web page with the form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index2.html');
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
    console.log(`Server 6 running at http://localhost:${port}/`);
});
