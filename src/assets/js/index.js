$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        425: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});


//page loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("opacity-0");
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});


//animation
AOS.init({
    duration: 1000, // optional: animation duration in ms
    once: true      // ✅ ensures the animation happens only once
});

// Scroll To Top

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 350) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});