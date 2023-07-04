const mongoose = require("mongoose");

const TestResultSchema = new mongoose.Schema({
  tests: {
    type: Array,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
});

const TestResult = mongoose.model("TestResult", TestResultSchema);

module.exports = { TestResult };
