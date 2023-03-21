// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (lnk) => {
    // prevent default
    lnk.preventDefault();
    links.classList.remove("show-links");

    const id = lnk.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

// traversing the dom
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});

// formulario reservo

const fnsform = document.getElementById("fonasa-form");
const partform = document.getElementById("particular-form");
const fnsbtn = document.getElementById("fonasa-btn");
const partbtn = document.getElementById("particular-btn");

// Añadir un evento al primer botón para mostrar el primer div y ocultar el segundo

fnsbtn.addEventListener("click", function () {
  // Cambiar el display del primer div a "block"
  fnsform.style.display = "block";
  // Cambiar el display del segundo div a "none"
  partform.style.display = "none";
});

// Añadir un evento al segundo botón para mostrar el segundo div y ocultar el primero

partbtn.addEventListener("click", function () {
  // Cambiar el display del segundo div a "block"
  partform.style.display = "block";
  // Cambiar el display del primer div a "none"
  fnsform.style.display = "none";
});
