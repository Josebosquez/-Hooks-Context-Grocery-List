var createError = require('http-errors');
var express = require('express');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const groceryRouter = require('./routes/grocery/groceryRouter')

const errorController = require('./routes/utils/errorController')
const ErrorMessageHandlerClass = require("./routes/utils/ErrorMessageHandlerClass");

app.use(cors())

console.log(process.env.NODE_ENV) // will return undefined
if (process.env.NODE_ENV === 'development') {
  app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/grocery',groceryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.all("*", function (req, res, next) { // if none of my paths match, run this error
  next(new ErrorMessageHandlerClass(
    `Cannot find ${req.originalUrl} on this server! Check your URL.`,
    404
  ))
})

app.use(errorController)

module.exports = app;
