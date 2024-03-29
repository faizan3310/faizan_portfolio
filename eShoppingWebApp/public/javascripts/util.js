var utilData = {
    showAlert: (msg, duration) => {

        $("#pageAlertBlock").text(msg).show();
        setTimeout(() => {
            $("#pageAlertBlock").hide();
        }, 3000) 
    },
    userAccountId: ''
};
