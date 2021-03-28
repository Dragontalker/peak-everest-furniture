const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
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

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});