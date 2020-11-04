const fps = new FullPageScroll('fullpage', {
    transitionTime: 1500
});

fps.onslide = function(e) {
    const slide = e.target.currentSlide

    if (slide !== 0) {
        test(fadeOut)
    } else {
        test(fadeIn)
    }
}

function test(animation) {
    const left = document.getElementById("landing-content-area").children
    const right = parallaxElements

    for (let i = 0; i < left.length; i++) {
        const e = left[i]
        setTimeout(() => {
            animation(e, "left")
        }, i * 40)
    }

    for (let i = 0; i < right.length; i++) {
        const index = i === 0 ? 0 : right.length - i
        const e = right[index]
        setTimeout(() => {
            animation(e, "right")
        }, i * 40)
    }
}

function fadeOut(e, direction) {
    e.setAttribute("animating", true)
    e.style.animation = `fade-out-${direction} .6s cubic-bezier(0.32, 0, 0.67, 0) forwards`
}

function fadeIn(e, direction) {
    e.setAttribute("animating", true)
    setTimeout(() => {
        e.style.animation = `fade-in-${direction} .6s cubic-bezier(0.33, 1, 0.68, 1) forwards`
    }, 900)
}