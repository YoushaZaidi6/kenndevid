// for canonical tag 
function setCanonical() {
    var canonicalUrl = window.location.href;
    var canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
}

// For navbar 
var tl = gsap.timeline();
tl.from(".nav .logo, .nav .navbar ul li a, .nav .globeBtn", {
    y: -40,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.15
});

// For intro
 
var tl = gsap.timeline();
tl.from(".kittyTitlemain", {
    y:-80,
    opacity:0,
    duration: 2,
    delay:1.5,
})
var tl = gsap.timeline();
tl.from(".kittyTitle", {
    y:80,
    opacity:0,
    duration: 2,
    delay:1.5,
})
var tl = gsap.timeline();
tl.from(".kitty-form", {
    y:80,
    opacity:0,
    duration: 2,
    delay:1.5,
})


const d = new Date();
let year = d.getFullYear();
document.getElementById("yearSpan").innerHTML = year;
window.onload = function () {
    setCanonical();
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": 0,
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
      }
    toastr.info('Purchase $100 worth of Tokens, and receive GTA VI cheats for free!', 'Notification');
};