const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve the web page with the form
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
            <form id="dataForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <button type="submit">Submit</button>
            </form>
            <div id="response"></div>

            <script>
                document.getElementById('dataForm').addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent the default form submission

                    // Get form data
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;

                    // Send data using fetch
                    fetch('/input', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name: name, email: email })
                    })
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('response').innerHTML = 
                            '<p>Name: ' + data.name + '</p>' +
                            '<p>Email: ' + data.email + '</p>';
                    })
                    .catch(error => console.error('Error:', error));
                });
            </script>
        </body>
        </html>
    `);
});

// Handle the data received from fetch
app.post('/input', function(req, res){
    const { name, email } = req.body;
    console.log(name + ", " + email);
    res.json({ name: name, email: email });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
