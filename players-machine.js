import { can, CAN_H, CAN_W, con, drawHpGauge, FPS, keys } from "./utility.js"

const PLMC_PPS = 150;
const PLMC_PPF = PLMC_PPS / FPS;
const PLMC_HP = 100;

class Plmc {
    constructor() {
        this.x = can.width / 2;
        this.y = can.height * 0.8;
        this.w = 20;
        this.h = 30;
        this.speed = PLMC_PPF;
        this.hp = PLMC_HP;
    }

    move() {
        if (keys["ArrowUp"]) {
            if (this.speed <= this.y) {
                this.y -= this.speed;
            }
        }
        if (keys["ArrowDown"]) {
            if (this.y + this.h <= can.height - this.speed) {
                this.y += this.speed;
            }
        }
        if (keys["ArrowLeft"]) {
            if (this.speed <= this.x - this.w / 2) {
                this.x -= this.speed;
            }
        }
        if (keys["ArrowRight"]) {
            if (this.x + this.w / 2 < can.width - this.speed) {
                this.x += this.speed;
            }
        }
    }

    draw() {
        con.fillStyle = "blue";
        con.beginPath();
        con.lineTo(this.x, this.y);
        con.lineTo(this.x + this.w / 2, this.y + this.h);
        con.lineTo(this.x - this.w / 2, this.y + this.h);
        con.closePath();
        con.fill();

        drawHpGauge(CAN_W * 0.5, CAN_H * 0.95, CAN_W * 0.9, CAN_H * 0.05, this.hp / PLMC_HP);
    }
}

export let plmc = new Plmc();

export const updatePlmc = () => {
    plmc.draw();
    plmc.move();
}