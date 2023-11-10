const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursorpoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

mouseFollower();