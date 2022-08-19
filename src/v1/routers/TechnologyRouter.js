const { Router } = require('express');
const controller = require('../controllers/TechnologyController');
const { validateFields, validateID } = require('../validators/technology');

const router = Router();

router.post('/', validateFields, controller.postTechnology);
router.get('/', controller.getTechnologies);
router.get('/:technologyID', validateID, controller.getTechnology);
router.put('/:technologyID', validateFields, validateID, controller.putTechnology);
router.delete('/:technologyID', validateID, controller.deleteTechnology);

module.exports = router;