const express = require("express");

require("./db/mongoose");
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
const testsRouter = require("./routes/testsRouter");
const userRouter = require("./routes/userRouter");


// *** Midlewares ***
app.use(bodyParser.json()); // to get data from front

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); 
  res.header("Access-Control-Allow-Credentials", true); 
  next();
});

// *** ROUTES ***
app.use("/tests", testsRouter);
app.use("/user", userRouter);

// *** Start server ***
app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("PORT :>> " + process.env.HOST + process.env.PORT);
  } else {
    console.log('error :>> ', error);
  }
});
