const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    status: {
        type: String,
        default: 'Open'
    },
    title: String,
    customer: String,
    customer_contact: String,
    description: String,
    category: String,
    priority: String,
    technician_name: String,
    technnician_notes: String,
    date_created: {
        type: Date,
        default: new Date()
    }
});

const Ticket = mongoose.model('Ticket', TicketSchema);
 
module.exports = Ticket;