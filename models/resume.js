const mongoose = require('mongoose');

const ResumeSchema = mongoose.Schema({
    
  created_on: String
});

module.exports = mongoose.model('resume', ResumeSchema);