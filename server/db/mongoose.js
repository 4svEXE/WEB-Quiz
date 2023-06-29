const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/WEBTESTS";

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("connectet to :>> ", mongoURL);
  })
  .catch((err) => {
    console.error("Mongo connect error", err);
  });

module.exports = { mongoose };
