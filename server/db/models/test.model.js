const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  image: {type: String},
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  answers: [
    {
      title: {type: String},
      isCorrect: {type: Boolean},
    },
  ],
  explanation:{
    type: String,
    required: true,
  }
});

const Test = mongoose.model("Task", TestSchema);

module.exports = { Test };
