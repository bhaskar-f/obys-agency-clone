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
    }, 33);
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
  delay: 3.7,
});
tl.from("#page1", {
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});
