document.addEventListener("DOMContentLoaded", () => {
    addCapthcaText();
    
    // http://localhost:3000/check/userLoggedIn
    
    axios.get('/check/userLoggedIn').then((reponse) => {
        console.log(reponse.data);
        
        if (reponse.data.isLoggedIn == true) {
            loadSelectedPage('productDetails');            
        }else {
            loadSelectedPage('onLoad');
        }
    })

});

var addCapthcaText = () => {
    var captchaText = generateCaptchaText('LNULN');
    document.querySelector(".captchaBlock").innerText = captchaText;
}

var loadSelectedPage = (pageType) => {
    location.hash = pageType;
    if(pageType == "onLoad"){
        $('.newUser').show();
        $('.loggedInUser').hide();
    } else {
        $('.newUser').hide();
        $('.loggedInUser').show();
    }
    var templateUrl = ''
    switch (pageType) {
        case "onLoad":
            templateUrl = 'templates/onload.htm' 
            break;
        case "productDetails":
            templateUrl = 'templates/productDetails.htm'
            break; 
    }
    axios.get(templateUrl).then((response) => {
        console.log(response);
        $('main').html(response.data);

        if(pageType == "productDetails"){
            loadProductsToPage();
        }
    })
}

var logOutUser = () => {
    // http://localhost:3000/destroy/userSession

    axios.get("/destroy/userSession").then((response) => {
        console.log(response);
        if(response.data.msg == "session destroyed"){
            loadSelectedPage("onLoad");
        }
    })
}