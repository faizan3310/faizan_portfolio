var singleProductTemplate;

axios.get('templates/singleProductTmplt.htm').then((response) => {
    // console.log(response.data);
    singleProductTemplate = Handlebars.compile(response.data);
})

var loadProductsToPage = (userQ = {}) => {
    $("#productDetailsContainer").html('');
    console.log("userQ");
    console.log(userQ);
    axios.get("/get/productDetails", {params: userQ}).then((result) => {
        console.log("frm /get/productDetails api");
        console.log(result.data);
        var productData = result.data;
        productData.forEach((product, index) => {
            product.title = product.title.substr(0, 50); 
            product.description = product.description.substr(0, 80) + ' ...'
            product.index = index; 
            product.price = "₹ " + product.price; 

            $("#productDetailsContainer").append(singleProductTemplate(product));

            var ratingContainerID = `#rating_${index}`
            addRatingStarsToContainer(product.rating.rate, ratingContainerID);
    });
    }).catch((error) => {
        console.log(error);
    });
}

var setPriceRange = () => {
    $('#selectedPrice').text($('#priceRangeBar').val())
}

var applyFilter = () => {
    // console.log($('#priceRangeBar').val());
    var userQuery = {};
    userQuery.priceRange = $('#priceRangeBar').val();
    loadProductsToPage(userQuery);
}


var getCheckedCategories = () => {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const checkedValues = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });
    console.log(checkedValues);
    var userQuery = {};
    userQuery.categories = checkedValues;
    loadProductsToPage(userQuery);
}

