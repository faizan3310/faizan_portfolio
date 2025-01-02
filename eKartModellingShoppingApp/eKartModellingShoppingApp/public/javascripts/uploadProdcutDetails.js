
var productData = {
    "mainImage": "",
    "productId": "s_012",
    "imagesList": [],
    "mainTitle": "",
    "productDescription": "",
    "boughtMsg": "",
    "actualPrice": "",
    "discountPercent": 0,
    "deliveryOfferMsg": "",
    "metaInfo": "",
    "category": "",
    "itemsInStock": 10,
    "rating": 0,
    "details": { }
}
var readProductDetails = () => {
    
    // productData.mainImage = $("#mainImage").val();
    productData.mainTitle = $("#mainTitle").val();
    productData.productDescription = $("#productDescription").val();
    productData.boughtMsg = $("#boughtMsg").val();
    productData.actualPrice = $("#actualPrice").val();
    productData.discountPercent = $("#discountPercent").val();
    productData.deliveryOfferMsg = $("#deliveryOfferMsg").val();
    productData.metaInfo = $("#metaInfo").val();
    productData.category = $("#category").val();
    productData.rating = $("#rating").val();
    console.log(productData);

    axios.post("/add/newProductDetails", productData).then((result) => {
        $(".successBlock").html("Successfuly added new product details");
    }).catch((err) => {
        
    });
}

var uploadProductImage = () => {
    console.log($("input[name=prodImage"));
    let uploadfile = $("input[name=prodImage]")[0].files[0];
    if (uploadfile.type == 'text/plain') {
        alert("Text files cannot be uploaded");
        return;
    }
    let formData = new FormData();
    formData.append("prodImage", uploadfile);
    axios.post("/upload/resource", formData, {headers: {
        "Content-Type": "multipart/form-data",
    }}).then((response) => {
        console.log(response)
        productData.mainImage = response.data.file_path;
    })
}