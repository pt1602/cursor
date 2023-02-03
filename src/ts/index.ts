const cursorDot: HTMLElement | null = document.querySelector('[data-cursor]');
const cursorOutline: HTMLElement = document.createElement('div')
let outlineDelay: number | null;
cursorDot?.classList.add('cursor-dot')
cursorOutline.classList.add('cursor-outline');
cursorDot?.after(cursorOutline);

if (cursorDot && "getAttribute" in cursorDot) {
    outlineDelay = Number(cursorDot.getAttribute("data-cursor-delay"));
}

window.addEventListener('mousemove', function (e) {
    const posX: number = e.clientX;
    const posY: number = e.clientY;

    if (cursorDot && cursorOutline) {
        if ("style" in cursorDot) {
            cursorDot.style.left = `${posX}px`;
        }

        if ("style" in cursorDot) {
            cursorDot.style.top = `${posY}px`;
        }

        if (outlineDelay) {
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {duration: outlineDelay, fill: "forwards"});
        } else {
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {duration: 300, fill: "forwards"});
        }
    }
})
