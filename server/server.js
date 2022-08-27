const express = require('express') // import express server
const db = require('./config/connection');

const PORT = process.env.PORT || 3000; // define the PORT for the server
const app = express(); // a new instance of express

// express middlewears for processing client request and server response
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// start the server
db.once('open', () => {
   app.listen(PORT, () => {
     console.log(`API server running on port ${PORT}!`);
   })
 })