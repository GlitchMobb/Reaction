const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send({hi: 'there'});
});

app.listen(5000);

//Localhost:5000

//Atom-Runner Instructions
//Hit Ctrl+R (Alt+R on Win/Linux) to launch the runner for the active window.
//Hit Ctrl+Shift+R (Alt+Shift+R on Win/Linux) to run the currently selected text in the active window.
// Ctrl+Shift+C to kill a currently running process.
//Hit Escape to close the runner window.
