const express = require('express');
const router = express.Router(); 
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const contactController = require('./controllers/contactController');
const auth = require('./middleware/auth');



router.get("/listUsers", auth, userController.findAll);
router.get("/listUser/:id", auth, userController.findOne);
router.post("/signUp", userController.create);
router.patch("/update/:id",auth, userController.update);
router.delete("/delete/:id", auth, userController.delete);

router.post("/signIn", loginController.login);

router.post("/addContact/:id",auth, contactController.create);
router.post("/listContacts/:id",auth, contactController.findAll);
router.get("/findContact/:id", auth, contactController.findOne);



module.exports = router;