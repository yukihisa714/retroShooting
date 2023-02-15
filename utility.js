export const FPS = 60;
export const CAN_W = 300;
export const CAN_H = 300;

export const can = document.getElementById("canvas");
export const con = can.getContext("2d");
can.width = CAN_W;
can.height = CAN_H;
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

export const sqrt = (x) => Math.sqrt(x);