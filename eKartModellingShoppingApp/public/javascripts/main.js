var loginModel;

var loadSelectedPage = (pageType) => {
    var templateUrl;
    switch (pageType) {
        case 'homepage':
            $("#logoutUserBtn").hide();
            $("#loginUserBtn").show();
            $("#onloadBlock").show();
            $("#detailsBlock").html("");
            break;
        case 'loadProducts':
            $("#logoutUserBtn").show();
            $("#loginUserBtn").hide();
            $("#onloadBlock").hide();
            templateUrl = 'templates/productDetails.htm';
            break;
        case 'cartDetails':
           templateUrl = 'templates/userCartPage.htm'
            break;

    }

    axios.get(templateUrl).then((result) => {
        $("#detailsBlock").html(result.data);
        if (pageType == 'loadProducts') {
            loadProductDetailsToPage('random');
        }
    }).catch((err) => {

    });
}

