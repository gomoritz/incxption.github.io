const slides = [0, 1, 2]
const fps = new FullPageScroll('fullpage', {
    transitionTime: 1500,
    goToTopOnLast: false
});

// fix scrolling after reload
setTimeout(() => {
    window.scroll(0, 0)
}, 50)

// fade out all other slides than the main slide
for (let i = 1; i < slides.length; i++) {
    animateSlide(i, fadeOut)
}

// handle slide change
fps.onslide = function(e) {
    const slide = e.target.currentSlide

    for (const n of slides) {
        if (slide !== n) {
            animateSlide(n, fadeOut)
        } else {
            animateSlide(n, fadeIn)
        }
    }
}

/**
 * Animates the elements inside of the slide n using the given animation function.
 * @param {number} n The index of the slide starting from 0.
 * @param {function} animation The animation function applied to the elements.
 */
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

/**
 * Fades out the element e in the given direction.
 */
function fadeOut(e, direction) {
    e.setAttribute("animating", true)
    setTimeout(() => {
        e.style.animation = `fade-out-${direction} .6s cubic-bezier(0.32, 0, 0.67, 0) forwards`
    }, 200)
}

/**
 * Fades in the element e from the given direction.
 */
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