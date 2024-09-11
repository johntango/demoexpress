# Express Web Server

### Main challenge is being clear about where data resides and where its being injected into web page.

- server0 - demo routes f1 and f2 and changes background color
- server1 - get a lucky number on route /lucky
- server2 - /input/:name/:email data moved to server in URL
- server3 - shows routes f1, f2, input etc
- server4 - Form action="/input" method="POST" to move data to a specific ROUTE on the server then back again using literal tick mark to inject data dynamically into Web Page on the server and send new updated web page back
- server5 - Uses public directory for "static" web page called index1.html and "fetch" sends the data to the Web Server using POST and body. The response from the Web Server is a list of all the names and emails, which are injected into the "Static Web Page".  This is very efficient because the Web Page does not need to be "refreshed".
- server6 - Uses index2.html to render "dark mode" using bootstrap css.

* Debugging Web Page + Web server needs careful attention. Which one is causing the error?
* Web Page can be debugged using Chrome IDE
* Web Server can be run in debug mode with breakpoints.
* Note: Web page may used "cached" version so may not reflect updates. Do hard refresh (look this up)

Note that README.md is using markdown.
To run code

```javascript
node serverX.js

```

console.log('Hello, World!');
