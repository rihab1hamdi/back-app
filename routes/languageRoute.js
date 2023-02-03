const express = require('express')
const LangugeController = require('../controllers/languageController')
const router = express.Router();

    // Create a new Note
    router.post('/', LangugeController.create);
   // router.get('/', ExperienceController.findAll);

   
module.exports = router