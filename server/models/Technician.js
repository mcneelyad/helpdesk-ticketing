const mongoose = require('mongoose');

const TechnicianSchema = new mongoose.Schema({
    first_name: String,
    middle_name: String,
    last_name: String,
    phone: String,
    email: String
});

const Technician = mongoose.model('Technician', TechnicianSchema);
 
module.exports = Technician;