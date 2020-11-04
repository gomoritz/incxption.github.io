const parallaxElements = document.getElementsByClassName("parallax-img")

window.addEventListener('mousemove', event => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    for (const element of parallaxElements) {
        if (element.getAttribute("animating")) continue

        const centerX = element.clientTop + element.clientHeight / 2;
        const centerY = element.clientLeft + element.clientWidth / 2;

        const percentX = (event.clientX - centerX) / vw
        const percentY = (event.clientY - centerY) / vh

        const horizontalSpeed = -element.getAttribute("hs")
        const verticalSpeed = -element.getAttribute("vs")

        const absoluteX = (percentX - 0.5) * horizontalSpeed
        const absoluteY = (percentY - 0.5) * verticalSpeed

        element.style.transform = `translateX(${absoluteX}px) translateY(${absoluteY}px)`
    }
})