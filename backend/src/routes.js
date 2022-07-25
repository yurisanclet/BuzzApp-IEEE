const express = require('express');
const router = express.Router(); 
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const contactController = require('./controllers/contactController');
const auth = require('./middleware/auth');



router.get("/listUsers", userController.findAll);
router.get("/listUser/:id", auth, userController.findOne);
router.post("/signUp", userController.create);
router.patch("/update/:id",auth, userController.update);
router.delete("/delete/:id", auth, userController.delete);

router.post("/signIn", loginController.login);

router.post("/addContact/:id",auth, contactController.create);
router.get("/listContacts/:id",auth, contactController.findAll);



module.exports = router;