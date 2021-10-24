const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: String,
    label: String
});

const Category = mongoose.model('Category', CategorySchema);
 
module.exports = Category;