const mongoose = require('mongoose');

const LangSchema = mongoose.Schema({
    _id_Resume: String,
    lang_title:String,
    
});

module.exports = mongoose.model('language', LangSchema);