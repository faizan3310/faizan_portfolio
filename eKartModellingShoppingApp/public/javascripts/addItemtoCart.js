var addItemToCart = (productId) => {
    var details = {productId, itemscount: 1};
    
    axios.get('/add/productToCart', {params: {productDetails: details}}).then((result) => {
        console.log(result);
    }).catch((err) => {
        
    });
}