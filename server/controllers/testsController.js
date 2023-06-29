const { Test } = require("../db/models");

/**
 * GET /tests
 * purpose: Get all tasks
 */
exports.getTests = async (req, res) => {
  Test.find({}).then((tests) => {
    res.json(tests);
  });
};

/**
 * POST /tests
 * purpose: Craete a new test question
 */
exports.newTest = async (req, res) => {
  if (req.body.title) {
    let newTest = new Test({
      title: req.body.title,
      difficulty: req.body.difficulty,
      answers: req.body.answers,
      image: req.body.image,
      explanation: req.body.explanation,
    });

    newTest.save().then((listDoc) => {
      res.json({ listDoc });
    });
  } else {
    res.json({ message: "Empty values" });
  }
};

/**
 * PATCH /tests
 * purpose: Update a test
 */
exports.updateTest = async (req, res) => {
  Test.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.json({
      message: "Test wos updated!",
      "req.body": req.body,
      "req.params.id": req.params.id,
    });
  });
};

/**
 * DELETE /tests/:id
 * purpose: Delete a test
 */
exports.deleteTest = async (req, res) => {
  console.log("Test deleted", req.params.id);

  Test.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.json({
      message: "Test wos deleted!",
    });
  });
};

/**
 * GET /tests
 * purpose: Get all tasks
 */
exports.getTest = async (req, res) => {
  Test.findOne({ _id: req.params.id }).then((test) => {
    res.json(test);
  });
};
