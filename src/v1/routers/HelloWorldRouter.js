const { Router } = require('express');
const controller = require('../controllers/HelloWorldController');

const router = Router();

router.get('/', controller.helloWorld);

module.exports = router;