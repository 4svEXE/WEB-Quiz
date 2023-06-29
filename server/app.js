const express = require("express");

const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
require("./db/mongoose");
const testsRouter = require("./routes/testsRouter");
const userRouter = require("./routes/userRouter");

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
app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.use("/tests", testsRouter);
app.use("/user", userRouter);

// *** Start server ***
app.listen(PORT, () => {
  console.log("PORT :>> http://localhost:" + PORT);
});
