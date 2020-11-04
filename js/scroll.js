const fps = new FullPageScroll('fullpage', {
    transitionTime: 1500
});

animateSlide(1, fadeOut)

fps.onslide = function(e) {
    const slide = e.target.currentSlide

    if (slide !== 0) {
        animateSlide(0, fadeOut)
    } else {
        animateSlide(0, fadeIn)
    }

    if (slide !== 1) {
        animateSlide(1, fadeOut)
    } else {
        animateSlide(1, fadeIn)
    }
}

function animateSlide(n, animation) {
    const left = document.getElementsByClassName("content")[n].children
    const right = document.getElementsByClassName("parallax")[n].children

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
    setTimeout(() => {
        e.style.animation = `fade-out-${direction} .6s cubic-bezier(0.32, 0, 0.67, 0) forwards`
    }, 200)
}

function fadeIn(e, direction) {
    e.setAttribute("animating", true)
    setTimeout(() => {
        e.style.animation = `fade-in-${direction} .6s cubic-bezier(0.33, 1, 0.68, 1) forwards`
    }, 700)
    setTimeout(() => {
        e.setAttribute("animating", false)
        e.style.animation = null
    }, 1500)
}