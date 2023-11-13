// for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// for cursor movement
// function mouseFollower() {
//     window.addEventListener("mousemove", function (dets) {
//         document.querySelector("#cursorpoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     })
// }


var timeout;
function mouseShape() {

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#cursorpoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1, 1)`;
        }, 100);
    });

}


// for cursor movement
function mouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursorpoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`;
    })
}

// for in / out Effect through GSAP
function homepage() {
    var tl = gsap.timeline();

    // for nav bar
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        // for .boundingElement class
        .to(".boundingElement", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1,

        })

        // for homefooter section
        .from("#homefooter", {
            y: -10,
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1,
            opacity: 0,
        })

}

// for image animation
document.querySelectorAll("#element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function (dets) {

        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: .5,
        });
    });

    element.addEventListener("mousemove", function (dets) {

        var difference = dets.clientY - element.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientx;

        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: difference,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
        });
    });
});


// for time
let time = document.getElementById("time");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);



mouseShape();
mouseFollower();
homepage();