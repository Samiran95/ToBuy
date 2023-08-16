function otherDisplay() {

    gsap.to(".grocery",{
        y: "70vh",
        duration : 0.7,
        ease: Power4.easeOut,

    })

    gsap.to(".other",{
        y: "-70vh",
        duration : 0.7,
        ease: Power4.easeOut,
    })
}

function groceryDisplay() {

    gsap.to(".other",{
        y: "0vh",
        duration : 0.7,
        ease: Power4.easeOut,

    })

    gsap.to(".grocery",{
        y: "0vh",
        duration : 0.7,
        ease: Power4.easeOut,
    })
}


//Forms


function groceryForm() {

    gsap.to(".grocery-form",{
        y: "-70vh",
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1
    })

    gsap.to(".greetings",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".dashboard",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".lower",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".lower2",{
        filter : "blur(30px)",
        duration : 0.7
    })


}

function closegroceryForm() {

    gsap.to(".grocery-form",{
        y: "0vh",
        duration : 0.5,
        pointerEvents : "none",
    })

    gsap.to(".greetings",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".dashboard",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".lower",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".lower2",{
        filter : "blur(0px)",
        duration : 0.4
    })

}

function otherForm() {

    gsap.to(".other-form",{
        y: "-70vh",
        duration : 0.7,
        ease: Power4.easeOut,
        pointerEvents : "all",
        zIndex : 1
    })


    gsap.to(".greetings",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".dashboard",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".lower",{
        filter : "blur(30px)",
        duration : 0.7
    })

    gsap.to(".lower2",{
        filter : "blur(30px)",
        duration : 0.7
    })
}

function closeotherForm() {

    gsap.to(".other-form",{
        y: "0vh",
        duration : 0.5,
        pointerEvents : "none",
    })

    gsap.to(".greetings",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".dashboard",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".lower",{
        filter : "blur(0px)",
        duration : 0.4
    })

    gsap.to(".lower2",{
        filter : "blur(0px)",
        duration : 0.4
    })

}