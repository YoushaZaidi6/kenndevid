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

const copytxt = document.querySelector(".copytxt");
const settingtext = document.querySelector(".settingtext");

copytxt.addEventListener("click", function () {
    const textToCopy = settingtext.textContent;

    navigator.clipboard
        .writeText(textToCopy)
        .then(function () {
            settingtext.textContent = "Copied to clipboard";
              // Show Toastr notification for successful copy
              toastr.success('Text copied to clipboard successfully!');
            setTimeout(function () {
                settingtext.textContent = textToCopy;
            }, 2000);
        })
        .catch(function (err) {
            // Show Toastr error notification if copy fails
            toastr.error('Failed to copy text. Please try again.');
        });
});

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

tl.from(".heroUpper", {
    y: -40,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.15
});

// For about
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 80%",
        end: "center center",
        scrub: 2
    }
});

tl2.from(".aboutLeft", {
    x: -30,
    opacity: 0,
    duration: 1.5,
    delay: 3
}, "anim");

tl2.from(".aboutRight", {
    x: 30,
    opacity: 0,
    duration: 1.5,
    delay: 3,
}, "anim");

// For about
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#tokenomics .tokenomicsTitle",
        scroller: "body",
        start: "top 80%",
        end: "center center",
        scrub: 2,
    }
});

tl2.from(".tokenomicsTitle", {
    y: 30,
    opacity: 0,
    duration: 3,
    delay: 2
}, "anim");

tl2.from(".copytxt, .contractbx", {
    x: -50,
    opacity: 0,
    duration: 3,
    delay: 2
}, "anim");

tl2.from(".tokValues", {
    x: 50,
    opacity: 0,
    duration: 3,
    delay: 2,
    stagger: 0.15
}, "anim");
tl2.from(".pointers span", {
    x: -50,
    opacity: 0,
    duration: 5,
    delay: 3,
    stagger: 0.15
});

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