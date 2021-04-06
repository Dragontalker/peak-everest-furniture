const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mernCommerce';
let onlineUsers = {};

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('==> 🌱  MongoDB is connected.');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// HTTP request logger
app.use(morgan('dev'));

// connect to route file for API handling
require('./app/routes/api.js')(app, onlineUsers);

// display all pages from react
// app.use(express.static('./client/build'));
// app.get('*', (req, res) => {
//     console.log("[HTML GET]: Get React app");
//     res.sendFile('./client/build/index.html', {root:"."});
// });

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    // Set route for static files
    app.get('*', (req, res) => {
        console.log("[HTML GET]: Get React app");
    })
};

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});