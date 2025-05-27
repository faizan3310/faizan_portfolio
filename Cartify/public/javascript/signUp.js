// /newUser/signup

var resetFormData = () => {
    $('#s_accountID').val('');
    $('#s_accountPwd').val('');
    $('#s_accountEmail').val('');
    $('#s_RaccountPwd').val('');
}

var doUserSignUp = () => {
    var userDetails = {};
    userDetails.accountId = $('#s_accountID').val();
    userDetails.password = $('#s_accountPwd').val();
    userDetails.mailId = $('#s_accountEmail').val();

    console.log(userDetails);

    axios.post('/newUser/signup', userDetails).then((result) => {
        console.log("successfully hit signUp api and received response frm server");
        console.log(result);

        if(result.data.msg == "success"){
            $('#signUpMsg').text("Account created successfully").css('color', 'green');
            resetFormData();
            setTimeout(() => {
                LoginModal.show();
                SignupModal.hide();
            }, 1000);
        }else if (result.data.msg == "failed") {
            $('#signUpMsg').text("Error while creating an account").css('color', 'red');
        } else { // result.data.msg -> "account exist" 
            resetFormData();
            setTimeout(() => {
                LoginModal.show();
                SignupModal.hide();
            }, 1000);
            $('#signUpMsg').text("Account already exist. Please login").css('color', 'blue');
        }
    }).catch((error) => {
        console.log(error);
    })
}