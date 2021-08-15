let searchbtn = document.querySelector("#search_btn");
let searchbar = document.querySelector(".searchbar_container");
let formbtn = document.querySelector("#login_btn");
let Loginform = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form_close");
let menubar = document.querySelector("#menu_bar");
let navbar = document.querySelector(".navbar");
let videobtn = document.querySelectorAll(".vid-btn");





menubar.addEventListener('click', () => {
    menubar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})


window.onscroll = () => {
    searchbtn.classList.remove("fa-times");
    searchbar.classList.remove("active");
    menubar.classList.remove("fa-times");
    navbar.classList.remove("active");
    Loginform.classList.remove("active");
}
searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle("fa-times");
    searchbar.classList.toggle("active");
})


formbtn.addEventListener('click', () => {
    Loginform.classList.add("active")
})

formClose.addEventListener('click', () => {
    Loginform.classList.remove("active");
})

videobtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute("data-src");
        document.querySelector("#video_slider").src = src;
    })
})


// slider from Swipper.js
var swiper = new Swiper(".review_slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Swipper slider end

// brand slider start
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1020: {
            slidesPerView: 5,
        }
    }
});


// brand slider end