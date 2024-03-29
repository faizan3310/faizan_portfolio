var loadSelectedPage = (type) => {
  location.hash = type;
  if (type == "viewCart") {
    showUserCartDetails();
    return;
  }
  if (type == "Login") return;
  var templateUrl = "";
  switch (type) {
    case "signup":
      templateUrl = "templates/newSignup.htm";
      break;
    case "home":
      $("#mainContentBlockArea").html("");
      $(".metaContentBlock").show();
      $("#slide").show();
      $("#sliderContainer").show();
      $(".imgcontainer").show();
      break;
    case "frgotPwd":
      templateUrl = "templates/forgotPwd.htm";
      break;
    case "productList":
      templateUrl = "templates/productDetailsPage.htm";
      break;
    case "productDetails":
      templateUrl = "templates/descriptiveProductDetailsPage.htm";
      break;
  }

  axios.get(templateUrl).then((response) => {
    if (type == "signup") {
      $(".metaContentBlock").hide();
      $("#slide").hide();
      $("#sliderContainer").hide();
      $(".imgcontainer").hide();
      $("#mainContentBlockArea").html(response.data);
    } else if (type == "frgotPwd") {
      // hide existing popup
      $("#pageLoginModel").modal("hide");
      $("#mainContentBlockArea").html(response.data);
    } else if (type == "productList") {
      $("#mainContentBlockArea").html(response.data);
      loadProductDetails();
    } else if (type == "productDetails") {
      // Page with product details - more descriptive
      $(".metaContentBlock").hide();
      // $("#mainContentBlockArea").html(response.data);
      renderSingleProductDetails(response.data);
    }
  });
};

var logoutUser = () => {
  location.hash = "home";
  axios.get("/userSession/logout", {}).then(() => {
    loadSelectedPage("home");
    removeLoggedinUserAccountDetails();
    $("#cartCountValue").text("");
    utilData.showAlert("You've Been Logged Out");
  });
};

/*function ItemAddedToCount() {
  var cartItemCount = document.getElementById("cartItemCount");
  var count = parseInt(cartItemCount.textContent) || 0;
  count++;
  cartItemCount.textContent = count;
} */
