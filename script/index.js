const homeLink = document.querySelector('#nav-home');
const aboutLink = document.querySelector('#nav-about');
const contactLink = document.querySelector('#nav-contact');

homeLink.addEventListener("click", function(e) {
    e.preventDefault();
    location.hash = "#logo"
})

aboutLink.addEventListener("click", function(e) {
    e.preventDefault();
    location.hash = "#about"
})

contactLink.addEventListener("click", function(e) {
    e.preventDefault();
    location.hash = "#contact"
})