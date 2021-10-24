const mongoose = require('mongoose');

const PrioritySchema = new mongoose.Schema({
    id: String,
    label: String
});

const Priority = mongoose.model('Priority', PrioritySchema);
 
module.exports = Priority;