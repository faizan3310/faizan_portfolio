var deleteCartItem = (productId) => {
  alert(productId);

  axios
    .get(`/delete/deleteCart/${productId}`)
    .then((response) => {
      console.log(response);
    })
    .then((error) => {
      console.log(error);
    });
};
