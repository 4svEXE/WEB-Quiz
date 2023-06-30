const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.newUser);
router.post("/login", userController.loginUser);

// router.patch("/:id", userController.updateTest);
// router.delete("/:id", userController.deleteTest);

// router.get("/test/:id", userController.getTest);

module.exports = router;
