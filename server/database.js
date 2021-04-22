const mongoose = require('mongoose');

const Ticket = require('./models/Ticket');
const Technician = require('./models/Technician');

mongoose.connect('mongodb://localhost:27017/helpdesk',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.error('Something went wrong', err));
    
mongoose.set('useCreateIndex', true);

// TICKET QUERIES ------------------------

function getAllTickets() {
    return Ticket.find({});
}

function createTicket(ticket) {
    var ticket = new Ticket(ticket);
    ticket.save()
        .then(() => {
            console.log("ticket saved to database");
        })
        .catch(err => {
            console.log("unable to save to database");
        });
}

function getAllOpenTickets() {
    return Ticket.find({status: 'Open'});
}

function getOpenTicketCount() {
    return Ticket.countDocuments({status: 'Open'});
}

function getTicketById(id) {
    return Ticket.find({_id:id})
}

// TECHNICIAN QUERIES ------------------------

function getAllTechnicians() {
    return Technician.find({});
}

module.exports = { getAllTickets, createTicket, getAllOpenTickets, getOpenTicketCount, getAllTechnicians };