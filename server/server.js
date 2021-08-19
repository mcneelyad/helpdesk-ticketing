const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const moment = require('moment');
const MongoStore = require('connect-mongo');
const passport = require('passport');

const router = require('./router');

const User = require('./models/User');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Passport middleware
app.use(passport.initialize());

app.use(
    session({
        secret: 'HeYC1ttlI0vkDHpUWtd2XxA8j1XpIlnk',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: 'mongodb://localhost:27017/helpdesk'
        }),
        resave: true,
        rolling: true,
        cookie: {
            expires: 60 * 1000 * 10
        }
    })
);

app.use(router);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});