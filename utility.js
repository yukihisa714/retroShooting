export const FPS = 30;

export const can = document.getElementById("canvas");
export const con = can.getContext("2d");
can.width = 300;
can.height = 300;
can.style.background = "black";

export const random = (min, max) => Math.random() * (max - min) + min;

export const keys = {};
document.onkeydown = (e) => {
    // console.log(e.key);
    keys[e.key] = true;
}
document.onkeyup = (e) => {
    keys[e.key] = false;
}

export const sin = (theta) => Math.sin(Math.PI / 180 * theta);
export const cos = (theta) => Math.cos(Math.PI / 180 * theta);