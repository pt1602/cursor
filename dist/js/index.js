"use strict";
const cursorDot = document.querySelector('[data-cursor]');
const cursorOutline = document.createElement('div');
const allLinksAndButtons = document.querySelectorAll('a, button');
let outlineDelay;
cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.classList.add('cursor-dot');
cursorOutline.classList.add('cursor-outline');
let cursorOutlineSize = 30;
cursorDot === null || cursorDot === void 0 ? void 0 : cursorDot.after(cursorOutline);
if (cursorDot && "getAttribute" in cursorDot) {
    outlineDelay = Number(cursorDot.getAttribute("data-cursor-delay"));
}
window.addEventListener('load', () => {
    cursorOutlineSize = cursorOutline.offsetWidth;
});
window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
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
            }, { duration: outlineDelay, fill: "forwards" });
        }
        else {
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 300, fill: "forwards" });
        }
    }
});
allLinksAndButtons.forEach((item) => {
    item.onmouseover = () => {
        if ("style" in cursorOutline) {
            cursorOutline.style.width = cursorOutlineSize * 1.25 + 'px';
            cursorOutline.style.height = cursorOutlineSize * 1.25 + 'px';
        }
    };
    item.onmouseout = () => {
        if ("style" in cursorOutline) {
            cursorOutline.style.width = cursorOutlineSize + 'px';
            cursorOutline.style.height = cursorOutlineSize + 'px';
        }
    };
});
