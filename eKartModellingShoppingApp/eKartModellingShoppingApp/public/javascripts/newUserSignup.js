var signupNewUser = () => {
    var userData = {};
    userData.userName = $("#signUpUserName").val();
    userData.accountId = $("#accountId").val();
    userData.password = $("#accountPassword").val();
    userData.mailId = $("#accountMailId").val();

    axios.post("/add/userUser", userData).then((response) => {
        console.log("The result is")
        console.log(response,'signup');
        if(response.data.msg==='Success'){
        $("#statusMsgSignup").text('Successfully Created.')
        }
    }).catch((err) => {
        
    });
    console.log(userData);
}
document.addEventListener("DOMContentLoaded", () => {
    $("#statusMsgSignup").text('');
});