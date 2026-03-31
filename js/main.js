// Sticky Navbar
// window.addEventListener("scroll", function () {
//   let navbar = document.querySelector(".main-navbar");
//   navbar.classList.toggle("sticky", window.scrollY > 50);
// });
// HERO SLIDER
// var swiper = new Swiper(".hero-slider", {
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


// 

let lastScroll = 0;
const header = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // SCROLL DOWN → HIDE
    header.classList.add("header-hidden");
  } else {
    // SCROLL UP → SHOW
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
const offerBar = document.querySelector(".top-offer-bar");
const head = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    offerBar.style.transform = "translateY(-100%)";
    head.style.top = "0";
  } else {
    offerBar.style.transform = "translateY(0)";
    head.style.top = "32px";
  }
});
const texts = [
  "Search for beautiful indoor plants for your home 🌱",
  "Find the best seeds for your home garden 🌾",
  "Explore premium pots and stylish planters 🪴",
  "Search plant care products and fertilizers 🌿",
  "Discover garden tools for easy maintenance 🛠",
  "Find low maintenance plants for beginners 🌼",
  "Search air purifying plants for fresh living 🌳",
  "Explore garden services for your green space 🌿"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

const input = document.getElementById("searchInput");

// cursor blink toggle
let cursorVisible = true;

function typeEffect() {
  if (count === texts.length) count = 0;

  currentText = texts[count];

  if (!isDeleting) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, --index);
  }

  // 🔥 add cursor
  input.setAttribute("placeholder", letter + (cursorVisible ? " |" : " "));

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 30 : 60);
  }
}

// 🔥 blinking cursor loop
setInterval(() => {
  cursorVisible = !cursorVisible;
}, 500);

// start
typeEffect();