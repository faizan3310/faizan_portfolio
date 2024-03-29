document.addEventListener("DOMContentLoaded", () => {
  const inputIcon = document.querySelector(".input-icon");
  inputIcon.addEventListener("click", toggleVisibility);

  function toggleVisibility() {
    const input = document.querySelector("#accountPwd");
    const toggleIcon = document.querySelector(".input-icon i");

    if (input.type === "password") {
      input.type = "text";
      toggleIcon.className = "bi bi-eye-slash";
    } else {
      input.type = "password";
      toggleIcon.className = "bi bi-eye-fill";
    }
  }
});
