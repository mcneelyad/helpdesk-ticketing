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
    technician_id: String,
    technician_notes: String,
    date_created: {
        type: Date,
        default: new Date()
    },
    resolution: String,
});

const Ticket = mongoose.model('Ticket', TicketSchema);
 
module.exports = Ticket;