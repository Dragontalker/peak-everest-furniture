const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mernCommerce';

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

if (process.env.NODE_ENV === 'production') {
    // for serving REACT production-build content
    console.log( '> production: static from client/build' )
    app.use( express.static(path.join('client','build')) )
} else {
    // for serving all the normal html
    app.use( express.static('./client/build') )
}

// connect to route file for API handling
require('./app/routes/api.js')(app);

// display all pages from react
app.get('*', (req, res) => {
    console.log("[HTML GET]: Get React app");
    res.sendFile('./client/build/index.html', {root:"."});
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});