/*
  Atom-Runner Instructions
  Hit Ctrl+R (Alt+R on Win/Linux) to launch the runner for the active window.

  Hit Ctrl+Shift+R (Alt+Shift+R on Win/Linux) to run the currently
  selected text in the active window.

  Ctrl+Shift+C to kill a currently running process.

  Hit Escape to close the runner window.


    Express Route Handler Methods
              Get: get info
             POST: Send info
        APP / PUT: Update all the properties of something
           DELETE: Delete something
            PATCH: Update one or two properties of something

    app: Create new express app to register the route handler
    get: will watch for incoming requests with this method
    '/': Watch for requests trying to access '/' (Informs Express.JS something
         is trying to access a specific route)
    req: Object representing the incoming requests
    res: Object representing the outgoing response
    res.send(): Immediately sends some JSON back to who ever made the request

*/
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

//Localhost:5000
//Heroku can inject environment variables
//No environemnet variable defined by Heroku, utilize Localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT);
