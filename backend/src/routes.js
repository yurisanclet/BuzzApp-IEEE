const express = require('express');
const router = express.Router(); // instanciando o express
const userController = require('./controllers/userController');

router.get('/users', userController.findAll);
router.post('/user', userController.create);



module.exports = router;

