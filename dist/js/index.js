"use strict";
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
        if ("style" in cursorDot) {
            cursorDot.style.left = `${posX}px`;
        }
        if ("style" in cursorDot) {
            cursorDot.style.top = `${posY}px`;
        }
        if ("style" in cursorOutline) {
            cursorOutline.style.left = `${posX}px`;
        }
        if ("style" in cursorOutline) {
            cursorOutline.style.top = `${posY}px`;
        }
    });
}
