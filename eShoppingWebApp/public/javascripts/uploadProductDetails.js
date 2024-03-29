

var saveProductDetails = () => {
    var productDetails = {
        "productId": "",
        "category": "",
        "name": "",
        "name_lrg": "",
        "price": 0,
        "discountPercent": 0,
        "manu": "",
        "image": "",
        "imageList": [],
        "rating": 0,
        "description": "",
        "productDetails": {},
        "maxDeliveryDays": 2,
        "inStock": "y",
        "itemsInStock": 0,
        sellerDetails: {
            sid : 's_01'
        }
      };
    productDetails.productId = $("#productId").val();
    productDetails.category = $("#category").val();
    productDetails.name = $("#name").val();
    productDetails.name_lrg = $("#name_lrg").val();
    productDetails.price = $("#price").val();
    productDetails.discountPercent = $("#discountPercent").val();
    productDetails.manu = $("#manu").val();
    productDetails.image = productImageUrl;
    productDetails.rating = $("#rating").val();
    productDetails.description = $("#description").val();
    productDetails.itemsInStock = $("#itemsInStock").val();

    console.log(productDetails);

    axios.get("/add/productDetails", {params: productDetails}).then((response) => {
        $("#msgBlock").html("<b>Added successfly</b>");
    })


}

var productImageUrl = '';
var sendImageToServer = () => {
    /*console.log($("input[name=prodImage]"));
    console.log($("input[name=prodImage]")[0].files[0].name);
    console.log($("input[name=prodImage]")[0].files[0].type);
    console.log($("input[name=prodImage]")[0].files[0].size);
    var fileSize = $("input[name=prodImage]")[0].files[0].size; */

    var uploadfile = $("input[name=prodImage]")[0].files[0];

    console.log($("input[name=prodImage]"));
    var userdata = {}; 
    userdata.name = $("#name").value
    
    let formData = new FormData();
    formData.append("prodImage", uploadfile);


    axios.post('/upload/fileResource', formData, {headers: {
        "Content-Type": "multipart/form-data",
      }}).then((response) => {
        console.log(response);
        productImageUrl = response.data.file_path;
      })



}