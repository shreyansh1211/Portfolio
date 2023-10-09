const heroSection = document.querySelector('.section-home');

document.querySelector(".home-link").addEventListener("click" , () => {
    heroSection.scrollIntoview({ bahavior: "smooth" });
});
