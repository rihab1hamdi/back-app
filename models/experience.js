const mongoose = require('mongoose');

const ExpSchema = mongoose.Schema({
    
    _id_Resume: String,
    Start_date: String,
    End_date: String,
    title_position:String,
    description: String,
    company_name: String,
});

module.exports = mongoose.model('experience', ExpSchema);