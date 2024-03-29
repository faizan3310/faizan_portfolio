
var pageProductId = '';

document.addEventListener("DOMContentLoaded", () => {
    // Changes Done By Ashish Chauhan (Password Rememer)
    const checkrem = document.getElementById("rememberMe"),
      emailInput = document.querySelector("#userAccountId"),
      passInput = document.querySelector("#accountPwd");
    if (localStorage.checkbox && localStorage.checkbox !== "") {
      checkrem.setAttribute("checked", "checked");
      emailInput.value = localStorage.username;
      passInput.value = localStorage.userpassword;
    } else {
      checkrem.removeAttribute("checked");
      emailInput.value = "";
      passInput.value = "";
    }
    const params = new URLSearchParams(location.search);
    
    
    axios.get('/check/UserSession', {params: {}}).then((response) => {
      if (response.data.isLoggedin) {

        utilData.userAccountId = response.data.accountId;
        showLoggedinUserAccountDetails();

        switch(location.hash) {
          case '#productList':
            $(".metaContentBlock").hide();
            loadSelectedPage('productList')
            break;
        }
        if (params.get('pid') ) {
          // load the product details page 
          pageProductId = params.get('pid');
          loadSelectedPage('productDetails');
          
        }
      }
    });
  });
  