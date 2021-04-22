const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const moment = require('moment');
// const LocalStrategy = require("passport-local");
// const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const { getAllTickets, createTicket, getAllOpenTickets, getOpenTicketCount, getAllTechnicians } = require('./database');

app.use(require("express-session")(
    {
        secret: "HeYC1ttlI0vkDHpUWtD2XxA8j1XpIlnk",
        saveUninitialized: false,
        resave: true,
        rolling: true,
        cookie: {
            expires: 60 * 1000 * 10
        }
    }
));

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(passport.initialize());
// app.use(passport.session());
  
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get('/', function (req, res) {
    res.render('Hello World');
});

app.get('/tickets', async function (req, res) {
    var tickets = await getAllTickets();
    res.send(tickets);
});

app.post('/create', function (req, res) {
    console.log(req.body.ticket);
    createTicket(req.body.ticket);
});

app.get('/dashboard', async (req, res) => {
    var statistics = {};

    statistics["openTicketCount"] = await getOpenTicketCount();
    statistics["openTickets"] = await getAllOpenTickets();
    statistics["technicians"] = await getAllTechnicians();

    res.send(statistics);
});

//Handling user login
// app.post("/login", passport.authenticate("local", {
// }), function (req, res) {
//     res.send()
// });

app.use('/login', (req,res) => {
    res.send({token: 'fluffy-bunny'})
})

app.post("/register", function (req, res) {
    var email = req.body.email;
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, email, function (err, user) {
        if (err) {
            console.log('register unsuccessful', err);
        }
  
        passport.authenticate("local")(req, res, function () {
            console.log('register successful')
        });
    });
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});