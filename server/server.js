const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const moment = require('moment');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const Ticket = require('./models/Ticket');

mongoose.connect('mongodb://localhost:27017/helpdesk',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('Something went wrong', err));
mongoose.set('useCreateIndex', true);

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

app.get('/', function (req, res) {
    res.render('Hello World');
});

app.get('/tickets', async function (req, res) {
    var tickets = await Ticket.find({});
    res.send(tickets);
});

app.post('/create', function (req, res) {
    console.log(req.body.ticket.customer);
    console.log(req.body.ticket.customerContact);
    var ticket = new Ticket({
        title: req.body.ticket.title,
        customer: req.body.ticket.customer,
        customer_contact: req.body.ticket.customerContact,
        description: req.body.ticket.description,
        category: req.body.ticket.category,
        priority: req.body.ticket.priority,
        technician_name: req.body.ticket.technicianName,
        technnician_notes: req.body.ticket.technicianNotes,
    });
    ticket.save()
        .then(() => {
            res.send("ticket saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

app.post('/login', (req, res) => {
    console.log("Login: ", req.body);
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});