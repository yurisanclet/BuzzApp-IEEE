const express = require('express');
const router = express.Router(); 
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const contactController = require('./controllers/contactController');
const messageController = require('./controllers/messageController');
const auth = require('./middleware/auth');



router.get("/listUsers", userController.findAll);
router.get("/listUser/:id", auth, userController.findOne);
router.post("/signUp", userController.create);
router.patch("/update/:emailUser",auth, userController.update);
router.delete("/delete/:email", auth, userController.delete);
router.post("/signIn", loginController.login);

router.post("/addContact/:id",auth, contactController.create);
router.get("/listContacts/:id",auth, contactController.findAll);

router.get("/listPrivateChats/:id", auth, messageController.listPrivateChats);
router.post("/sendMessage/:id", auth, messageController.sendMessage);


module.exports = router;