
var storeUserCredentials = () => {
    const checkrem = document.getElementById("rememberMe"),
      emailInput = document.querySelector("#userAccountId"),
      passInput = document.querySelector("#accountPwd");
    if (checkrem.checked && emailInput.value && passInput.value !== "") {
      localStorage.username = emailInput.value;
      localStorage.userpassword = passInput.value;
      localStorage.checkbox = checkrem.value;
    } else {
      localStorage.username = "";
      localStorage, (userpassword = "");
      localStorage.checkbox = "";
    }
  };
  
  // Captcha ::
  var setCapthcaTextImage = () => {
    var canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 80;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (var i = 0; i < 50; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var width = Math.random() * 40;
      var height = Math.random() * 40;
      ctx.fillStyle = randomColor();
      ctx.fillRect(x, y, width, height);
    }
    var captchaValue = generateRandomString(6);
    ctx.font = "italic bold 40px Arial";
    ctx.fillStyle = "black";
    for (var i = 0; i < captchaValue.length; i++) {
      var x = i * 30 + Math.random() * 20;
      var y = 50 + Math.random() * 20;
      var rotation = Math.random() * 0.4 - 0.2;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillText(captchaValue[i], 0, 0);
      ctx.restore();
    }
    var imageDataURL = canvas.toDataURL();
    var captchaImage = new Image();
    captchaImage.src = imageDataURL;
    var captchaContainer = document.getElementById("captchaContainer");
    captchaContainer.innerHTML = "";
    captchaContainer.appendChild(captchaImage);
  };
  
  function generateRandomString(length) {
    var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randomString = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }
    return randomString;
  }
  
  function randomColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
  }
  
  