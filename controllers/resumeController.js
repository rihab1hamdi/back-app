
const resModel = require('../models/resume')
// Create and Save a new resume
exports.create = async (req, res) => {
    if (!req.body.created_on ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const resume = new resModel({
          created_on: req.body.created_on,
       
    });
    
    await resume.save().then(data => {
        res.send({
            message:"resume created successfully!!",
            resume:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating resume"
        });
    });
  // Retrieve all users from the database.

/* exports.findAll = async (req, res) => {
    try {
        const experience = await expModel.find();
        res.status(200).json(experience);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}; */
};