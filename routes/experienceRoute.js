

module.exports = (app) => {
    const ExperienceController = require('../controllers/experienceContoller');


    router.post('/', ExperienceController.create);
    router.get('/', ExperienceController.findAll);
    router.delete('/:id', ExperienceController.destroy);

}

