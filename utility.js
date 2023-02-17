export let frame = 0;
export const incrementFrame = () => { frame++; };

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
document.onkeydown = e => {
    // console.log(e.key);
    keys[e.key] = true;
};
document.onkeyup = e => {
    keys[e.key] = false;
};

export const sin = theta => Math.sin(Math.PI / 180 * theta);
export const cos = theta => Math.cos(Math.PI / 180 * theta);

export const sqrt = x => Math.sqrt(x);

export const HP_GAUGE_COLORS = ["#ff0000", "cc4400", "448800", "00ff00"];

export const drawHpGauge = (x, y, w, h, ratio) => {
    const gaugeLeft = x - w / 2;
    const gaugeTop = y - h / 2
    con.fillStyle = "#dddddd";
    con.fillRect(gaugeLeft, gaugeTop, w, h);
    con.fillStyle = "#111111";
    con.fillRect(gaugeLeft, gaugeTop, w, h);
    con.fillStyle = `rgb(${255 * (1 - ratio)}, ${255 * ratio}, 0)`;
    con.fillRect(gaugeLeft, gaugeTop, w * ratio, h);
    con.strokeStyle = "#dddddd";
    con.lineWidth = h / 4;
    con.strokeRect(gaugeLeft, gaugeTop, w, h);
}