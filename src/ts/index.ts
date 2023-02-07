const cursorDot: HTMLElement | null = document.querySelector('[data-cursor]');
const cursorOutline: HTMLElement = document.createElement('div');
const allLinksAndButtons: NodeListOf<HTMLElement> = document.querySelectorAll('a, button');
let outlineDelay: number | null;
cursorDot?.classList.add('cursor-dot');
cursorOutline.classList.add('cursor-outline');
let cursorOutlineSize: number = 30;
cursorDot?.after(cursorOutline);

if (cursorDot && "getAttribute" in cursorDot) {
    outlineDelay = Number(cursorDot.getAttribute("data-cursor-delay"));
}

window.addEventListener('load', () => {
    cursorOutlineSize = cursorOutline.offsetWidth;
});

window.addEventListener('mousemove', function (e) {
    const posX: number = e.clientX;
    const posY: number = e.clientY;

    if (cursorDot && cursorOutline) {
        if ("style" in cursorDot) {
            cursorDot.style.left = `${posX}px`;
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

allLinksAndButtons.forEach((item) => {
    item.onmouseover = () => {
        if("style" in cursorOutline) {
            cursorOutline.style.width = cursorOutlineSize * 1.25 + 'px'
            cursorOutline.style.height = cursorOutlineSize * 1.25 + 'px'
        }
    }


    item.onmouseout = () => {
        if("style" in cursorOutline) {
            cursorOutline.style.width = cursorOutlineSize + 'px'
            cursorOutline.style.height = cursorOutlineSize + 'px'
        }
    }
});
