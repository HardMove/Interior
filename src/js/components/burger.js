const burgerBtn = document.querySelector(".burger");
const navMenu = document.getElementById("nav");
burgerBtn.addEventListener("click", function () {
   navMenu.classList.toggle("active")
   burgerBtn.classList.toggle("active")
   document.body.classList.toggle("hidden")
});