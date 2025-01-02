var poroductDetails = [];
var singleProductDataTemplate;
axios.get('/templates/singleProductDetails.htm').then((response) => {
    singleProductDataTemplate = Handlebars.compile(response.data);
})

var loadProductDetailsToPage = (categoryType, filters = {}) => {
    axios.get("/get/productDetails", {params: {category: categoryType, filters: filters}}).then(response => {
        $("#productDetailsBlock").html("");
        poroductDetails = response.data;
        poroductDetails.forEach((product, index) => {
            product.index = index;
            $("#productDetailsBlock").append(singleProductDataTemplate(product));
        });
    });
    
}

var applyProductsFilter = () => {
    var filters = {
        category: []
    }
    var selectedCategoryList =  document.querySelectorAll("[name=productCategory]:checked");
    if (selectedCategoryList && selectedCategoryList.length) {
        selectedCategoryList.forEach((element) => {
            filters.category.push(element.value)
        });
    }  
    loadProductDetailsToPage('getDetails', filters)
}