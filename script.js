/* RESPONSIVE NAVIGATION */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))

/* FADE BOTTOM REVEAL */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    reveal();
  });

/* CONTACT */
const check = document.querySelectorAll('input[type="checkbox"][name="check"]');

check.forEach(checkbox => {
    checkbox.addEventListener('change', 
    function() {
        check.forEach(otherCheckbox => {
            if(otherCheckbox !== this) {
                otherCheckbox.checked = false;
            }
        });
    });
});