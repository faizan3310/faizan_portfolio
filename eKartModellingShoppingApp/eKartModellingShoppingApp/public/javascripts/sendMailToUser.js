var sendOTPMail = ( ) => {
    var userDetails = {};
    userDetails.accountId = $("#forgot_AccountId").val();
    userDetails.mailId = $("#forgot_mailid").val();
    axios.get("/send/mail", {params: userDetails}).then((result) => {
            console.log(result);
            $("#mail_status").html("Mail with OTP been sent your mail");
    }).catch((err) => {
        
    });
}