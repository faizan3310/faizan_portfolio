


var singleCartProductTemplate;

axios.get('templates/singleCartProductDetail.htm').then((response) => {
    singleCartProductTemplate = Handlebars.compile(response.data);
})

var showUserCartDetails = () => {
    $(".metaContentBlock").hide();

    axios.get('/get/filteredProductList').then((response) => {
        $("#mainContentBlockArea").html(singleCartProductTemplate({productDetails: response.data}))
    })
}