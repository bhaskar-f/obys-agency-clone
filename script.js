function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#o, .line h2", {
    opacity: 0,
    onStart: function () {
      let h5text = document.querySelector("#o h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5text.innerHTML = grow++;
        } else {
          h5text.innerHTML = grow;
        }
      }, 30);
    },
  });
  tl.to(".line h2", {
    animationName: "blink",
    opacity: 1,
  });
  tl.from("#little-text", {
    opacity: 0,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.6,
    delay: 2,
  });
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    duration: 0.6,
    ease: Power4,
  });
  tl.from("#nav", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".hero h1", {
    y: 140,
    stagger: 0.2,
  });
}
loadingAnimation();
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h5", {});
}
cursorAnimation();
