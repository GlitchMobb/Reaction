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

    Express will route handle the user into the passport flow

    Run dev command: npm run dev

    Cookie based authentication

    Javascript Libraries: passport.js / express.js / mongoose.js /
                          Mlab (remote host MongoDB) - Hosted on AWS
*/

//  Can get away with this Syntax because we are not exporting any code
//  We don't care about pulling any code out of passport.js. Just make sure it's excuted.
require('./services/passport');
require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);


const app = express();

// Valid Javascript, when authRoutes file is required it will return a function
require('./routes/authRoutes')(app);


//http://localhost:5000/auth/google/callback <-- Fix wilcard option Google Oauth
//Heroku can inject environment variables
//No environemnet variable defined by Heroku, utilize Localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT);
