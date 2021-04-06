const mongoose = require('mongoose');
const User = require('../app/db/models/users');

mongoose.connect(
    'mongodb://localhost/mernCommerce',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

const userSeed = [
    {
        "name": "Richard",
        "email": "richard@email.com",
        "thumbnail": "",
        "type": "",
        "authId": "123",
        "password": "12345",
        "cart": []
    },
    {
    "name": "George",
    "email": "george@email.com",
    "thumbnail": "",
    "type": "",
    "authId": "234",
    "password": "23456",
    "cart": []
    },
    {
    "name": "Chang",
    "email": "chang@email.com",
    "thumbnail": "",
    "type": "",
    "authId": "345",
    "password": "34567",
    "cart": []
    },
    {
    "name": "Michael",
    "email": "Michael@email.com",
    "thumbnail": "",
    "type": "",
    "authId": "456",
    "password": "45678",
    "cart": []
    }
]

User.insertMany(userSeed);