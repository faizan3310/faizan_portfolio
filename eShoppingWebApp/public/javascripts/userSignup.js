var userDetails = {};

var getUserSignup = () => {
    userDetails.accountId = $("#accountId").val();
    userDetails.password = $("#password").val();
    userDetails.mailId = $("#userMailid").val();

    console.log("userDetails")
    console.log(userDetails)

    axios.post('/signup/newUser', userDetails).then((response) => {
        if(response.data.status == 'Success'){
            $('.msgblock').show(); 
            $('.msgblock').text('Registerd successfully');  
            $('#accountId').val('');
            $('#password').val('');
            $('#conpassword').val('');
            $('#userMailid').val('');
        }else{
            $('.msgblock').show(); 
            $('.msgblock').text('User with same account already exists');  
        }
    }).catch((error) => {

    })
}