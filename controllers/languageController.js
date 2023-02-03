
const lanhgModel = require('../models/language')

exports.create = async (req, res) => {
    if (!req.body._id_Resume && !req.body.lang_title) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const language = new lanhgModel({
          _id_Resume: req.body._id_Resume,
          lang_title: req.body.created_on
       
    });
    
    await resume.save().then(data => {
        res.send({
            message:"language created successfully!!",
            language:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating language"
        });
    });
  // Retrieve all languages from the database.

/* exports.findAll = async (req, res) => {
    try {
        const experience = await expModel.find();
        res.status(200).json(experience);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}; */
};