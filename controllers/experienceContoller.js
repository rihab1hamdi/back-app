
const expModel = require('../models/experience')

exports.create = async (req, res) => {
    if (!req.body._id_Resume && !req.body.Start_date && !req.body.End_date && !req.body.title_position
        && !req.body.description && !req.body.company_name) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const experience = new expModel({
          _id_Resume: req.body._id_Resume,
        Start_date: req.body.Start_date,
        End_date: req.body.End_date,
        title_position:req.body.title_position,
        description: req.body.description,
        company_name: req.body.company_name,
    });
    
    await experience.save().then(data => {
        res.send({
            message:"experience created successfully!!",
            experience:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating exerience"
        });
    });

 exports.findAll = async (req, res) => {
    try {
        const experience = await expModel.find();
        res.status(200).json(experience);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};  
exports.destroy = async (req, res) => {
    await expModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `experience not found.`
          });
        } else {
          res.send({
            message: "experience deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};
};