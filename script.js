function foodGSAP(){
    var tl = gsap.timeline();

tl.
to("#foodtop img",{
    height:"100vh",
    duration:1.2,
    ease:Expo.easeInOut
})

.to("#foodacc,#foodnav img,#foodmenu",{
    y:0,
    duration:1
})

 .to("#foodtoptext",{
    opacity:1,
    delay:-1
})
.to(".footstep1",{
    scale:1,
    delay:-1,
    stagger:.2
})
gsap.to(".foodstep1",{
    opacity:1,
    duration:1,
    stagger:.1,
    ease:Expo.easeIn,
    scrollTrigger: {
        trigger: ".foodstep1",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",
        // pin: true,
        // scrub: true,
        // markers:true
      },
})

gsap.to(".reason1",{
    opacity:1,
    duration:1,
    stagger:.1,
    ease:Expo.easeOut,
    scrollTrigger: {
        trigger: ".reason1",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",
        // pin: true,
        // scrub: true,
        // markers:true
      },
})


gsap.to(".brandphoto img",{
    width:"100%",
    duration:1.2,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: ".reason1",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",     
      },
})
gsap.from("#foodreason h2",{
    opacity:0,
    y:40,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: "#foodreason",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",     
      },
})
gsap.from("#foodreason h1",{
    opacity:0,
    y:40,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: "#foodreason",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",     
      },
})
gsap.from("#foodreason p",{
    opacity:0,
    duration:1,
    y:40,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: "#foodreason",
        scroller: "body",
        start:"top 60%",
        end: "top 30%",     
      },
})


}

foodGSAP()