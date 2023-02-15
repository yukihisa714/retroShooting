import { can, con, FPS, keys } from "./utility.js"

const PLMC_PPS = 150;
const PLMC_PPF = PLMC_PPS / FPS;

class Plmc {
    constructor() {
        this.x = can.width / 2;
        this.y = can.height * 0.8;
        this.w = 20;
        this.h = 30;
        this.speed = PLMC_PPF;
    }

    move() {
        if (keys["ArrowUp"]) {
            if (0 < this.y) {
                this.y -= this.speed;
            }
        }
        if (keys["ArrowDown"]) {
            if (this.y < can.height - this.h) {
                this.y += this.speed;
            }
        }
        if (keys["ArrowLeft"]) {
            if (this.w / 2 < this.x) {
                this.x -= this.speed;
            }
        }
        if (keys["ArrowRight"]) {
            if (this.x < can.width - this.w / 2) {
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
    }
}

export let plmc = new Plmc();

export const updatePlmc = () => {
    plmc.draw();
    plmc.move();
}