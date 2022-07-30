const express = require('express');
const router = express.Router(); 
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const contactController = require('./controllers/contactController');
const messageController = require('./controllers/messageController');
const auth = require('./middleware/auth');



router.get("/listUsers", userController.findAll);
router.get("/listUser/:id", auth.auth, userController.findOne);
router.get("/getInfo/:email", auth.auth, userController.getUserInfo);
router.post("/signUp", userController.create);

router.put("/update/:emailUser",auth.auth, userController.update);
router.delete("/deleteUser/:email", auth.auth, userController.delete);
router.post("/signIn", loginController.login);

router.post("/addContact/:emailUser",auth.auth, contactController.create);
router.get("/listContacts/:emailUser1",auth.auth, contactController.findAll);

router.get("/listPrivateChats/:id", auth.auth, messageController.listPrivateChats);
router.post("/sendMessage/:id", auth.auth, messageController.sendMessage);


module.exports = router;