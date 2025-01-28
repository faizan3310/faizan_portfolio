var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateUserCredentialsRouter = require('./routes/validateCredentials');
var fetchPhotoDetailsRouter = require('./routes/fetchPhotoDetails')
var addNewCommentRouter = require('./routes/addNewComment');
var getCommentsRouter = require('./routes/getPhotoComments');
var likesAndDislikesRouter = require('./routes/likesAndDislikes');
var deleteCommentRouter = require('./routes/deleteComment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// to solve CORS issue
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};
app.use(allowCrossDomain);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/userCredentials', validateUserCredentialsRouter);
app.use('/getPhotoDetails',fetchPhotoDetailsRouter);
app.use('/add/newComment' ,addNewCommentRouter);
app.use('/getComments',getCommentsRouter);
app.use('/doLikeOrDislike',likesAndDislikesRouter);
app.use('/deleteComment' ,deleteCommentRouter);

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
