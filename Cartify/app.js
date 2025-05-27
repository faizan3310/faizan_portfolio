var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateCredentialsRouter = require('./routes/validateUserCredentials');
var productDetailsRouter = require('./routes/getProductDetails');
var newUserSignUpRouter = require('./routes/newUserSignUp');
var checkLogInStatus = require('./routes/userLoggedInStatus');
var destroySessionRouter = require('./routes/destroySession');
var session = require('express-session'); 

var app = express();

app.use(session({secret: 'sample secret', cookie: {maxAge: 600000}}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/user/credentials', validateCredentialsRouter);
app.use('/get/productDetails',productDetailsRouter);
app.use('/newUser/signup' ,newUserSignUpRouter);
app.use('/check/userLoggedIn', checkLogInStatus);
app.use('/destroy/userSession', destroySessionRouter);

// catch 404 and forward to error handler
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

module.exports = app;
