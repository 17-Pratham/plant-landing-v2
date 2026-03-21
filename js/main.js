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

  let lastScrollTop = 0;
  const header = document.querySelector('.header-wrapper');
  const delta = 5;           // minimum scroll amount to trigger
  const navbarHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    let st = window.scrollY || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll down → hide
      header.classList.add('header-hide');
    } else {
      // Scroll up → show
      header.classList.remove('header-hide');
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, { passive: true });
