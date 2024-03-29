var validateUSerCredentails = () => {
    storeUserCredentials(); // Storing user data to cache.
    var userData = {};
    userData.accountId = $("#userAccountId").val();
    userData.password = $("#accountPwd").val();

    /*axios.get('/validate/userLogin', {params: userData}).then(response => {
        console.log("success");
    }).catch(() => {
        console.log("Error");
    }) */

    axios.post('/validate/userLogin', userData).then(response => {
        console.log("success");
        if (response.data.msg == 'Valid') {
            
            utilData.userAccountId = userData.accountId;
            showLoggedinUserAccountDetails();
            $('#pageLoginModel').modal('hide');
            $(".metaContentBlock").hide();
            loadSelectedPage('productList')
        } else {
            $(".invalidMsgBlock").show();
            $(".invalidMsgBlock").text("Invalid Credentials, please try again");
        }
    }).catch((error) => {
        console.table(error)
        console.log("Error");
    }) 


    console.log(userData)
}


/**
 * To hide the login and signup button,s and display user account id within header\enable the logout
 */
var showLoggedinUserAccountDetails = () => {
    
    $(".logoutBtnContainer").show();
    $(".loginSignupBtnContainer").hide();
    $(".wlcomeMsg").show();
    $("#header_userAccountId").html(utilData.userAccountId);
}

/**
 * To hide the login and signup button,s and display user account id within header\enable the logout
 */
var removeLoggedinUserAccountDetails = () => {
    
    $(".logoutBtnContainer").hide();
    $(".loginSignupBtnContainer").show();
    $(".wlcomeMsg").hide();
    $("#header_userAccountId").html('');
}