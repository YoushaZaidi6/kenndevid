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
tl.from("#intro2 .Head2", {
    y:-80,
    opacity:0,
    duration: 2,
    delay:1.5,
})
var tl = gsap.timeline();
tl.from("#intro2 .introbx2", {
    y:80,
    opacity:0,
    duration: 2,
    delay:1.5,
})

// For about

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about2 h1",
        scroller: "body",
        start: "top 80%",
        end: "center center",
        scrub: 2
    }
});

tl2.from(".Head", {
    y: 30,
    opacity: 0,
    duration: 3,
    delay: 2
}, "anim");

tl2.from(".Aboutbx", {
    x: -50,
    opacity: 0,
    duration: 3,
    delay: 2,
}, "anim");

tl2.from(".globeBtn2", {
    y: -30,
    opacity: 0,
    duration: 3,
    delay: 2
}, "anim");

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