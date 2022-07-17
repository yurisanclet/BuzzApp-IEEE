const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
const auth = require("./middleware/auth");

router.get("/users", auth, userController.findAll);
router.get("/user/:id", auth, userController.findOne);
router.post("/user", userController.create);
router.patch("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
router.post("/login", loginController.login);


module.exports = router;