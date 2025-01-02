document.addEventListener("DOMContentLoaded", () => {
  const rmCheck = document.getElementById("rememberMe"),
    accountId = document.getElementById("accountId"),
    acctPassword = document.getElementById("acctPassword");

  $("#loginPartModel").on("shown.bs.modal", function () {
    if (rmCheck && accountId && acctPassword) {
      if ( localStorage.checkbox && localStorage.accountId && localStorage.acctPassword !== "" ) {
        rmCheck.setAttribute("checked", "checked");
        accountId.value = localStorage.accountId;
        acctPassword.value = localStorage.acctPassword;
      } else {
        localStorage.removeAll();
        rmCheck.removeAttribute("checked");
        accountId.value = "";
        acctPassword.value = "";
      }
     } 
  });

});
