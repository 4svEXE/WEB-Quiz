const express = require("express");

const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const mongoose = require("./db/mongoose");
const testsRouter = require("./routes/testsRouter");

// *** Midlewares ***
app.use(bodyParser.json()); // to get data from front

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); //Необходимые типы запросов
  res.header("Access-Control-Allow-Credentials", true); //Означает, что должен быть получен ответ
  next();
});

// *** ROUTES ***
app.get("/", (req, res, next) => {
  res.json({ message: "success" });
});

// Tests routes
app.use("/tests", testsRouter);

// *** Start server ***
app.listen(PORT, () => {
  console.log("PORT :>> http://localhost:" + PORT);
});
