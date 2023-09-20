const pen = document.querySelector(".pen");
const magic = document.querySelector(".magic");

const jump = () => {
    pen.classList.add("jump");

    setTimeout(() => {
        pen.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() => {
    const magicPosition = magic.offsetLeft;
    const penPosition = +window.getComputedStyle(pen).bottom.replace("px", "");

    if (magicPosition <= 80 && magicPosition > 0 && penPosition < 75) {
        magic.style.animation = "none";
        magic.style.left = `${magicPosition}px`;
    }
}, 10);

document.addEventListener("keydown", jump);
