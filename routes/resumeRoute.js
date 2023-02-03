
const express = require('express')
const ResumeController = require('../controllers/resumeController')
const router = express.Router();

    // Create a new Note
    router.post('/', ResumeController.create);
   // router.get('/', ExperienceController.findAll);

   
module.exports = router
