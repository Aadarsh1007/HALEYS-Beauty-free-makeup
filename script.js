let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#nav",
    // pin: true,
    start: "top 5%",
    // markers: true,
    end: "+=00",
    scrub: 2,
  }
});
t2.to('#nav', {
  // opacity:1,
 duration: 2,
  y:-55,
 
});



let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pgraph",
    // pin: true,
    start: "top 20%",
    // markers: true,
    end: "+=400",
    scrub: 2,
  }
});
tl.to('.a1', {
    opacity:0,
    duration: 4,
    y:-100,
   
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#pgraph",
    // pin: true,
    start: "top 20%",
    // markers: true,
    end: "+=800",
    scrub: 2,
  }
});
t3.to('#bbbb', {
  duration: 16,
  x:-3188,
});

let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#pgraph",
    // pin: true,
    start: "40% 20%",
    // markers: true,
    end: "+=1000",
    scrub: 2,
  }
});
t4.to('#z1', {
  opacity: 1,
  duration: 0.1,
},'=1');
t4.to('#z1', {
  opacity:1,
  duration: 2,
  y:950,
},'=0');


let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#pgraph",
    // pin: true,
    start: "198% 45%",
    // markers: true,
    end: "+=250",
    scrub: 2,
  }
});
t5.from('.z2', {
    opacity:0,
    duration: 1,
    y:200,
   
});


let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#pgraph",
    // pin: true,
    start: "230% 45%",
    // markers: true,
    end: "+=350",
    scrub: 2,
  }
});
t6.from('.z3', {
    opacity:0,
    duration: 2,
    y: 150,
});
