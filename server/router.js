const express = require('express');
const router = express.Router();
const database = require('./database');
const User = require('./models/User');


router.get('/', function (req, res) {
    res.render('Hello World');
});

router.get('/tickets', async function (req, res) {
    var tickets = await database.getAllTickets();
    res.send(tickets);
});

router.get('/ticket/:id', async (req,res) => {
    var id = req.params.id;
    var ticket = await database.getTicketById(id);
    res.send(ticket);
})

router.post('/ticket/:id', async (req,res) => {
    var id = req.params.id;
    console.log(id);
    // res.send(ticket);
})

router.post('/create', function (req, res) {
    console.log(req.body.ticket);
    createTicket(req.body.ticket);
});

router.get('/dashboard', async (req, res) => {
    var statistics = {};

    var openTicketCount = await database.getOpenTicketCount();
    var openTickets = await database.getAllOpenTickets();
    var techniciansList = await database.getAllTechnicians();
    var ticketsByTech = {};

    for (let i = 0; i < techniciansList.length; i++)
    {
        ticketsByTech[techniciansList[i]._id] = [];
        for (let j = 0; j < openTickets.length; j++)
        {
            if (techniciansList[i]._id == openTickets[j].technician_id) {
                ticketsByTech[techniciansList[i]._id].push(openTickets[j]);
            }
        }
    }

    statistics["openTicketCount"] = openTicketCount;
    statistics["openTickets"] = openTickets;
    statistics["technicians"] = techniciansList;
    statistics["ticketsByTech"] = ticketsByTech;
    res.send(statistics);
});

router.post('/login', (req,res) => {
    res.send({token: 'fluffy-bunny'})
})

router.post('/register', function (req, res) {
    let { email, username, password } = req.body;
    
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

router.get('/technicians', async (req,res) => {
    var technicians = await database.getAllTechnicians();
    res.send(technicians);
})

module.exports = router;