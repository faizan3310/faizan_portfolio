axios.get("templates/cartItem.htm").then((response) => {
    singleCartItemTemplate = Handlebars.compile(response.data);
})

var singleCartItemTemplate = ''

var getCartDetails = () => {
    loadSelectedPage('cartDetails');
    axios.get("http://localhost:8081/get/cartItems", {params:{}}).then((result) => {
        console.log("result");
        var productList = result.data;

        productList.forEach(element => {
            $(".cartItemDetails").append(singleCartItemTemplate(element));
        });
        
    }).catch((err) => {
        
    });
}