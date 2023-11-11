// for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// for cursor movement
function mouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursorpoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

// for in out Effect through GSAP
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




mouseFollower();
homepage();