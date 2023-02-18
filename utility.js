export let frame = 0;
export const incrementFrame = () => { frame++; };

// キャンバスのFPS
export const FPS = 60;
// キャンバスのサイズ
export const CAN_W = 300;
export const CAN_H = 300;

export const can = document.getElementById("canvas");
export const con = can.getContext("2d");
can.width = CAN_W;
can.height = CAN_H;
can.style.background = "black";

/**
 * ランダムな小数を生成
 * @param {Number} min 以上
 * @param {Number} max 未満
 * @returns ランダムな小数
 */
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

// HPゲージの色
export const HP_GAUGE_COLORS = ["#ff0000", "cc4400", "448800", "00ff00"];

/**
 * HPゲージを描画する関数
 * @param {Number} x センターのx座標
 * @param {Number} y センターのy座標
 * @param {Number} w 横幅
 * @param {Number} h 縦幅
 * @param {Number} ratio 0以上1以下
 */
export const drawHpGauge = (x, y, w, h, ratio) => {
    const gaugeLeft = x - w / 2;
    const gaugeTop = y - h / 2
    con.fillStyle = "rgba(0, 0, 0, 0.3)";
    con.fillRect(gaugeLeft, gaugeTop, w, h);
    con.fillStyle = `rgb(${255 * (1 - ratio)}, ${255 * ratio}, 0)`;
    con.fillRect(gaugeLeft, gaugeTop, w * ratio, h);
    con.strokeStyle = "#dddddd";
    con.lineWidth = h / 4;
    con.strokeRect(gaugeLeft, gaugeTop, w, h);
}