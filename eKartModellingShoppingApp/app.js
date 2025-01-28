var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateCredentialsRouter = require("./routes/validateUserCredentials");
var productDetailsRouter = require("./routes/productDetials");
var newuserSignupRouter = require("./routes/signupUser");
var checkUserLoginRouter = require("./routes/checkUserSession");
var inValidateSession = require("./routes/invalidateSession");
var addProductToCart = require("./routes/addProductToCart");
var getCartDetailsRouter = require("./routes/getCartItems");
var sendMailRouter = require("./routes/sendMail");
var addNewProduct = require("./routes/addNewProdcut");
var uploadFilerouter = require("./routes/uploadFile");
var empDetailsRouter = require("./routes/empDetails_render")
var cluster = require("cluster");
var os = require("os");
var noofCPus = os.availableParallelism();

var app = express();

var server;
if (cluster.isMaster) {
  for (var i = 1 ; i <= 3; i++) {
    cluster.fork();
  }
} else {
  server = require('http').createServer(app).listen(8081, () => {
    console.log("server is listing at 8081 with process id " + process.pid)
  });
  const io = require('socket.io')(server);
}

var sessionConfigObj = {
  secret: 'kajdshfakjdshfkajsfd',
  cookie: {
    originalMaxAge: 1000000,
    secure: false // secure indicates whtehr its http|https server false is for http, true is for https
  }  
};
var totalNoOfUsersWatching = 0;
// io.on("connection", (socket) => {
  
//   console.log("User got connected , total no. of users watching " + totalNoOfUsersWatching);
  
//   socket.on("user_sendMsg", (data) => {

//     console.log(data);
//       socket.broadcast.emit("user_receiveMsg", data); // Republishing
//   });
  
//   socket.on("disconnect", () => {
//     totalNoOfUsersWatching--;
//     console.log("User got Disconnected , total no. of users watching " + totalNoOfUsersWatching);
//   });
// });
app.use(session(sessionConfigObj));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", validateCredentialsRouter);
app.use("/get/productDetails", productDetailsRouter);
app.use("/add/userUser", newuserSignupRouter);
app.use("/check/userSession", checkUserLoginRouter);
app.use("/invalidate/session", inValidateSession);
app.use("/add/productToCart", addProductToCart);
app.use("/get/cartItems", getCartDetailsRouter);
app.use("/send/mail", sendMailRouter);
app.use("/add/newProductDetails", addNewProduct);
app.use("/upload/resource", uploadFilerouter);
app.use("/get/empDetails", empDetailsRouter);
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
