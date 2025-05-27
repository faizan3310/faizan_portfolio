var resetLoginFormData = () => {
    $('#accntID').val('');
    $('#accntPwd').val('');
}

var validateUserCredentials = () => {
    userData = {};
    userData.accountId = $('#accntID').val();  
    userData.password = $('#accntPwd').val();

    console.log(userData);

    // http://localhost:3000/validate/user/credentials

    axios.post('/validate/user/credentials', userData).then((result) => {
        console.log("successfully hit login api and received response frm server");
        console.log(result);

        if(result.data.status == 'Invalid credentials'){
            $('#statusMsg').text("Invalid login credentials").css('color', 'red');
        } else if (result.data.status == 'Valid credentials') {
            $('#statusMsg').text("User logged In successfully").css('color', 'green');
            loadSelectedPage("productDetails"); 
            setTimeout(() => {
                LoginModal.hide();                
            }, 1000);
        } else { // Not Found
            $('#statusMsg').text("Account do not exist. Create an account before login").css('color', 'blue');
            resetLoginFormData();
            setTimeout(() => {
                showSignUpModal(); 
            }, 2000);
        }
    }).catch((error) => {
        console.log(error);
    })
}


var showSignUpModal = () => {
    LoginModal.hide();
    SignupModal.show();
}

var showLoginModal = () => {
    LoginModal.show();
    SignupModal.hide();
}

var LoginModal, SignupModal;
document.addEventListener('DOMContentLoaded', () => {
    LoginModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    SignupModal = new bootstrap.Modal(document.getElementById('signUpModal'), {});
})