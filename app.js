// const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
global.appRoot = path.resolve(__dirname);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Обработчик роутов
app.use("/", require("./routes"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send("<span>Page not found, 404</span>");
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // res.status(500).send("<span>Internal server error, 500</span>");
  res.status(500).send(`<pre>${err}</pre>`);
});

module.exports = app;
