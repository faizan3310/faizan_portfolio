var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var multer = require("multer");
var logger = require("morgan");
var session = require("express-session");

const http = require('http');
const { SocketIO } = require("socket.io");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/validateUserLogin");
var productDetailsRouter = require("./routes/getProductDetails");
var newUserSignupRouter = require("./routes/newUserSignup");
var addItemToCardRouter = require("./routes/addToCart");
var isUserLoggedin = require("./routes/checkIsUserLoggedin");
var logoutRouter = require("./routes/signoutUser");
var cartCountRouter = require("./routes/getCartCount");
var filteredProdutDetailsRouter = require("./routes/getFilteredProductList");
var addProductDetailsRouter = require("./routes/addProductDetails");
var uploadResourcesRouter = require("./routes/uploadResource");
var deleteCartItemRouter = require("./routes/deleteCartItem");
var getEmpDetailsRouter = require("./routes/employeeDetails_view")

const process = require('node:process');
var cluster = require("cluster");

const numCPUs = require('node:os').availableParallelism();
console.log("numCPUs");
console.log(numCPUs);
var app = express();

if (cluster.isPrimary) {
    for (var i = 0 ; i < numCPUs; i++) {
      cluster.fork(); 
    }
} else {
      const server =  http.createServer(app);
      var io = require('socket.io')(server);
      var noOfConnections = 0;
      io.on('connection', (socket) => {
            noOfConnections++;
            console.log("Total no. of current connections " + noOfConnections);  
            socket.on('disconnect', () => {
                  noOfConnections--;
                  console.log("Total no. of current connections " + noOfConnections)
            });
            socket.on("user_send_Msg", (msg) => {
              console.log(msg);
              socket.broadcast.emit("receive_msg", msg);
            })
        });

  app.use(
    session({
      secret: "My Secret",
      cookie: { maxAge: 100000 },
    })
  );
  server.listen(3000, () => {
    console.log(`Server is running port 3000 and processor is ${process.pid}`);
  });
  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(express.static(path.join(__dirname, "public")));

  app.use("/", indexRouter);
  app.use("/users", usersRouter);
  app.use("/validate/userLogin", loginRouter);
  app.use("/get/productList", productDetailsRouter);
  app.use("/signup/newUser", newUserSignupRouter);
  app.use("/products/addToCart", addItemToCardRouter);
  app.use("/check/UserSession", isUserLoggedin);
  app.use("/userSession/logout", logoutRouter);
  app.use("/cartCount", cartCountRouter);
  app.use("/get/filteredProductList", filteredProdutDetailsRouter);
  app.use("/add/productDetails", addProductDetailsRouter);
  app.use("/upload/fileResource", uploadResourcesRouter);
  app.use("/delete/deleteCart", deleteCartItemRouter);
  app.use("/get/EmpDetails", getEmpDetailsRouter);



  

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
}

module.exports = app;

