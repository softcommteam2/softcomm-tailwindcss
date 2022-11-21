// close-menu-btn
// open-menu-btn
// mobile-nav

const mobileNav = document.querySelector('#mobile-nav')
const closeMenuBtn = document.querySelector('#close-menu-btn')
const openMenuBtn = document.querySelector('#open-menu-btn')

openMenuBtn.onclick = ()=> {
  mobileNav.style.display = 'block'
}
closeMenuBtn.onclick = ()=> {
  mobileNav.style.display = 'none'
}

// Client section 
new Swiper(".clientSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });

  // Aos 
  AOS.init();