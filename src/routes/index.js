const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/users',  userController.all)
router.post('/users',  userController.create)


module.exports = router
