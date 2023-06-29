const express = require("express");
const router = express.Router();

const userController = require("../controllers/testsController");

router.get("/", testsController.getTests);
router.post("/", testsController.newTest);
router.patch("/:id", testsController.updateTest);
router.delete("/:id", testsController.deleteTest);

router.get("/test/:id", testsController.getTest);

module.exports = router;
