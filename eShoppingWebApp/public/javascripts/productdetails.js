var productData = {};

var getProductDetailsContent = () => {
    // getting products list
    axios.get('/get/productList', {params: {}}).then((response) => {
        productData = response.data;
        addProductsToThePage();
    });

    // getting the cart count
    axios.get('/cartCount', {params: {accountId: utilData.userAccountId}}).then((response) => {
        console.log(response);
        $("#cartCountValue").text(response.data.count);        
    });
}

var singleProductTemplate = '';
async function loadProductDetails() {
    await axios.get("templates/singleProductDetails.htm").then((response) => {
        singleProductTemplate = Handlebars.compile(response.data);
        getProductDetailsContent();
    });
}

var addProductsToThePage = () => {
    productData.details.forEach((productDetails, index) => {
        productDetails.ratingId = 'product_' + index;
        productDetails.discountPrice = productDetails.price - ((productDetails.price * productDetails.discountPercent / 100));
        $("#rightBlock_productDetails").append(singleProductTemplate(productDetails));
        var selector = '#' + productDetails.ratingId;
        renderRatingStars(selector, productDetails.rating);
    });
}

var renderSingleProductDetails = (templateHtml) => {
    templateHtml = Handlebars.compile(templateHtml);
    axios.get('/get/productList', {params: {productId: pageProductId}}).then((response) => {
        var selectedProductData = response.data.details[0];
        selectedProductData.discountPrice = selectedProductData.price - ((selectedProductData.price * selectedProductData.discountPercent / 100));
        $("#mainContentBlockArea").html(templateHtml(selectedProductData));
        renderRatingStars("#rating_container", selectedProductData.rating);
    });

}

var showSelectedImage = (imageUrl) => {
    var backgroundImage = "url('" + imageUrl + "')";
    $(".mainImage").css("background-image", backgroundImage);
}