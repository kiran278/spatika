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

//Contact Form 

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formsubmit.co/ajax/jagadish@spatikahr.com", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            successMessage.classList.remove("opacity-0");
            form.reset();
            // Hide after 5 seconds
            setTimeout(() => {
                successMessage.classList.add("opacity-0");
            }, 5000);
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Error submitting form.");
    }

    submitBtn.innerText = "Send Message";
    submitBtn.disabled = false;
});
