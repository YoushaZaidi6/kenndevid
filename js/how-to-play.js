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

if(window.innerWidth > 800){

    // For navbar 
    var tl = gsap.timeline();
    tl.from(".nav .logo, .nav .navbar ul li a, .nav .globeBtn", {
        y: -40,
        duration: 1,
        delay: 1,
        opacity: 0,
        stagger: 0.15
    });
    
    // for Hero 
    var tl = gsap.timeline();
    
    tl.from(".gta-purchase", {
        y: -40,
        duration: 0.5,
        delay: 2,
        opacity: 0,
    });
    tl.from(".title", {
        y: -40,
        duration: 0.5,
        opacity: 0,
    });
    tl.from(".step", {
        x: -10,
        duration: 0.5,
        opacity: 0,
    });
    tl.from(".gta-purchase2", {
        y: -40,
        duration: 0.5,
        opacity: 0,
    });
}

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
    toastr.info('Buy over $100 worth of our tokens and receive a free GTA 5 launcher key for PC! Don’t miss out on this offer!', 'Notification');
};

// navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }