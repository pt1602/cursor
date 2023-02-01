"use strict";
window.addEventListener('mousemove', function (e) {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const posX = e.clientX;
    const posY = e.clientY;
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
        }, { duration: 500, fill: "forwards" });
    }
});
