
document.addEventListener("DOMContentLoaded", () => {
    //add captcha generator to page...
    
    
    reloadCaptcha();
    loginModel = new bootstrap.Modal('#loginPartModel', {
        keyboard: false
    });
   
    axios.get("/check/userSession").then((response) => {
        
        if (response.data.isLoggedIn) { // user already logged in, directly show him the product details page.
            loadSelectedPage('loadProducts');

        }
    })
    
    
});

var reloadCaptcha = () => {
    captchaText = captchLib.generateCaptcha();

    const canvasEle = document.getElementById('captcha');
    captchLib.drawCaptcha(canvasEle);

}


var getUserCredentials = () => {
    var userDetails = {};
    userDetails.accountId = $("#accountId").val();
    userDetails.accountPassword = $("#acctPassword").val();
    
    const userEnteredCapthca = document.getElementById('userEnteredCapthca').value;
    var isCaptchaValid = captchLib.validateCaptcha(userEnteredCapthca);
    if (!isCaptchaValid) {
        alert("CAPTCHA Validation Failed, Please Try Again");
        return;
    }

    axios.post("/validate/userCredentials", userDetails).then((result) => {
        
        if (result.data.msg == 'Valid') {
            console.log('Valid details');

            // hide the login popup 
            loginModel.hide();

            loadSelectedPage('loadProducts')
        } else {
            console.log("Invalid details");
            $("#statusMsg").text('Invalid Credentials.')
        }
    }).catch((err) => {
        
    });
    const rmCheck = document.getElementById("rememberMe");

    if (rmCheck.checked && userDetails.accountId && userDetails.accountPassword !== "") {
        localStorage.accountId = userDetails.accountId;
        localStorage.acctPassword = userDetails.accountPassword;
        localStorage.checkbox = rmCheck.value;
      } else {
        localStorage.accountId = "";
        localStorage.acctPassword = "";
        localStorage.checkbox = "";
      }
    
}

var logoutUserSession = () => {
    axios.get("/invalidate/session").then((reponse) => {
        loadSelectedPage("homepage");
    });
}