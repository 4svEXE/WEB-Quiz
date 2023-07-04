const express = require("express");
const router = express.Router();

const testsController = require("../controllers/testsController");

router.get("/", testsController.getTests);
router.post("/", testsController.newTest);
router.patch("/:id", testsController.updateTest);
router.delete("/:id", testsController.deleteTest);

router.get("/test/:id", testsController.getTest);

// /tests/
router.post("/result/save", testsController.saveTestResults);
router.get("/result/:id", testsController.getTestResult);

module.exports = router;
