window.addEventListener('mousemove', function (e) {
    const cursorDot: HTMLElement | null = document.querySelector('[data-cursor-dot]');
    const cursorOutline: HTMLElement | null = document.querySelector('[data-cursor-outline]');

    const posX: number = e.clientX;
    const posY: number = e.clientY;

    if (cursorDot && cursorOutline) {
        if ("style" in cursorDot) {
            cursorDot.style.left = `${posX}px`;
        }

        if ("style" in cursorDot) {
            cursorDot.style.top = `${posY}px`;
        }

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: "forwards"});
    }
})
