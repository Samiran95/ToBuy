function otherDisplay() {

    gsap.to(".grocery", {
        y: "70vh",
        duration: 0.7,
        ease: Power4.easeOut,

    })

    gsap.to(".other", {
        y: "-70vh",
        duration: 0.7,
        ease: Power4.easeOut,
    })
}

function groceryDisplay() {

    gsap.to(".other", {
        y: "0vh",
        duration: 0.7,
        ease: Power4.easeOut,

    })

    gsap.to(".grocery", {
        y: "0vh",
        duration: 0.7,
        ease: Power4.easeOut,
    })
}


//Forms


function groceryForm() {

    gsap.to(".grocery-form", {
        y: "-70vh",
        duration: 0.7,
        ease: Power4.easeOut,
        pointerEvents: "all",
        zIndex: 1
    })

    gsap.to(".greetings", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".dashboard-actual", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".lower", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".lower2", {
        filter: "blur(30px)",
        duration: 0.7
    })


}

function closegroceryForm() {

    gsap.to(".grocery-form", {
        y: "0vh",
        duration: 0.5,
        pointerEvents: "none",
    })

    gsap.to(".greetings", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".dashboard-actual", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".lower", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".lower2", {
        filter: "blur(0px)",
        duration: 0.4
    })

}

function otherForm() {

    gsap.to(".other-form", {
        y: "-70vh",
        duration: 0.7,
        ease: Power4.easeOut,
        pointerEvents: "all",
        zIndex: 1
    })


    gsap.to(".greetings", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".dashboard-actual", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".lower", {
        filter: "blur(30px)",
        duration: 0.7
    })

    gsap.to(".lower2", {
        filter: "blur(30px)",
        duration: 0.7
    })
}

function closeotherForm() {

    gsap.to(".other-form", {
        y: "0vh",
        duration: 0.5,
        pointerEvents: "none",
    })

    gsap.to(".greetings", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".dashboard-actual", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".lower", {
        filter: "blur(0px)",
        duration: 0.4
    })

    gsap.to(".lower2", {
        filter: "blur(0px)",
        duration: 0.4
    })

}

gsap.from(".namaste-word", {
    opacity: 0,
    duration: 0.5,
    y: 100,
    ease: Power1.easeOut,
})

gsap.to(".namaste-word", {
    delay: 0.7,
    opacity: 0,
    duration: 0.4,
    y: -100,
    ease: Power1.easeOut,
})

gsap.to(".full-page-animate", {
    delay: 1,
    duration: 0.5,
    y: "-102vh",
    ease: Power1.easeOut,
})

gsap.from(".actual-greetings", {
    delay: 1.6,
    duration: 0.5,
    opacity: 0,
    scale: 0.95
})

gsap.from(".heading", {
    delay: 1.9,
    duration: 0.5,
    opacity: 0,
    scale: 0.98
})


gsap.from(".groceries-dashboard-animate", {
    delay: 1.7,
    duration: 0.5,
    opacity: 0,
    scale: 0.95
})

gsap.to(".groceries-dashboard-animate", {
    delay: 4,
    visibility: "hidden",
    duration: 0
});

gsap.from(".groceries-dashboard", {
    delay: 4.1,
    duration: 0.5,
    y : 20,
    opacity : 0,
})


gsap.from(".others-dashboard-animate", {
    delay: 1.8,
    duration: 0.5,
    opacity: 0,
    scale: 0.95
})

gsap.to(".others-dashboard-animate", {
    delay: 4.1,
    opacity : 0,
    duration: 0
});

gsap.from(".others-dashboard", {
    delay: 4.2,
    duration: 0.5,
    y : 20,
    opacity : 0,
    pointerEvents:"All"
})

gsap.to(".groceries-list-animate", {
    delay: 2,
    duration: 0.5,
    opacity: 1,
    scale: 1
})

gsap.to(".groceries-list-animate", {
    delay: 4,
    opacity : 0,
    duration: 0,
    display : "none"
});

gsap.from(".groceries-list", {
    delay: 4.2,
    duration: 0.5,
    y : 30,
    opacity : 0,
    pointerEvents:"All"
})

gsap.from(".count-container", {
    delay: 4.2,
    duration: 0.5,
    opacity : 0,
    pointerEvents:"All"
})






