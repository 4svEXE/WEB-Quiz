const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/all", userController.getAllUsers);
router.post("/", userController.newUser);
// router.patch("/:id", userController.updateTest);
// router.delete("/:id", userController.deleteTest);

// router.get("/test/:id", userController.getTest);

module.exports = router;
