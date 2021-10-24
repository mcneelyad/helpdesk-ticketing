const mongoose = require('mongoose');

const Ticket = require('./models/Ticket');
const Technician = require('./models/Technician');
const Category = require('./models/Category');
const Priority = require('./models/Priority');

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

/*
    This function returns all tickets from the database
*/
function getAllTickets() {
    return Ticket.find({});
}

/*
    This function creates a new ticket from the ticket object passed in.
    @param {Object} ticket - the ticket to be created
*/
function createTicket(ticket) {
    var ticket = new Ticket(ticket);
    ticket.save()
        .then(() => {
            console.log("ticket saved to database");
        })
        .catch(err => {
            console.log("unable to save to database");
            throw err;
        });
}


/*
    This function returns all open tickets.
*/
function getAllOpenTickets() {
    return Ticket.find({status: 'Open'});
}
/*
    This function returns the number of all open tickets
*/
function getOpenTicketCount() {
    return Ticket.countDocuments({status: 'Open'});
}
/*
    This function returns all tickets with a specific technician ID.
    @param {String} id - the technician ID
*/
function getTicketByTechnicianId(techId) {
    return Ticket.find({technician_id: techId});
}

/*
    This function returns all tickets by a specific ID number.
*/
function getTicketById(id) {
    return Ticket.find({_id: id});
}

// TECHNICIAN QUERIES ------------------------


/*
    This function is used to get all technicians.
*/
function getAllTechnicians() {
    return Technician.find({});
}
/* 
    This function is used to create a technician.
    @param {Object} technician - the technician to be created
*/
function createTechnician(technician) {
    var technician = new Technician(technician);
    technician.save()
        .then(() => {
            console.log("technician saved to database");
        })
        .catch(err => {
            console.log("unable to save to database");
        });
}

// CATEGORY QUERIES ------------------------

/*
    This function returns an array of categories.
*/
function getCategories() {
    return Category.find({});
}

// PRIORITY QUERIES ------------------------

/*
    This function returns an array of priorities.
*/
function getPriorities() {
    return Priority.find({});
}

module.exports = { 
    getAllTickets, 
    createTicket, 
    getAllOpenTickets, 
    getOpenTicketCount, 
    getAllTechnicians, 
    getTicketByTechnicianId,
    getTicketById,
    createTechnician,
    getCategories,
    getPriorities
};