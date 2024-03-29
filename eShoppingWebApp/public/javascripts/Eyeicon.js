//changes done by Jyothi kandikatla
    var signuppwdchangeTheType = () => {
    // code for signup password
    var signuppwd = document.querySelector("#password");
    var signuptype = signuppwd.getAttribute('type');
    if(signuptype == 'password'){
        signuppwd.setAttribute('type','text');
        document.querySelector("#openeyepwd").style.display = 'none';
        document.querySelector("#closedeyepwd").style.display = 'inline-block';
    }
    else{
        signuppwd.setAttribute("type", 'password')
        document.querySelector("#openeyepwd").style.display = 'inline-block';
        document.querySelector("#closedeyepwd").style.display = 'none';
    }

    }
    var confirmpwdchangeTheType = () =>{
        // code for confirm password
        var confirmpwd = document.querySelector("#conpassword");
        var confirmpwdtype = confirmpwd.getAttribute('type');
        if(confirmpwdtype == 'password'){
            confirmpwd.setAttribute('type','text');
            document.querySelector("#openeyecon").style.display = 'none';
            document.querySelector("#closedeyecon").style.display = 'inline-block';
        }
        else{
            confirmpwd.setAttribute("type", 'password')
            document.querySelector("#openeyecon").style.display = 'inline-block';
            document.querySelector("#closedeyecon").style.display = 'none';
        }
    }
    



