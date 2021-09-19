var express = require("express");
const exphbs = require('express-handlebars');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
var createError = require('http-errors');

var tasksRouter = require("./routes/tasks");
var employeeRouter = require("./routes/employee")
var inventoryRouter = require("./routes/inventory")

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//CORS code for front-end
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');// orgin, where we are accepting requests from everywhere (*)
  res.header('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Headers: access");//recently added
  res.header("Access-Control-Allow-Methods: POST");//recently added
  next();
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/tasks", tasksRouter);
app.use("/employee", employeeRouter);
app.use("/inventory", inventoryRouter);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
