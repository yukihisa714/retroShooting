import { CAN_H, CAN_W, con, FPS, sqrt } from "./utility.js";
import { plmc } from "./players-machine.js";

const ENEMY_PPS = 100;
const ENEMY_PPF = ENEMY_PPS / FPS;

class Enemy {
    constructor() {
        this.x = CAN_W / 2;
        this.y = CAN_H * 0.3;
        this.w = 30;
        this.h = 30;
        this.speed = ENEMY_PPF;
    }

    move() {
        const different = {
            x: plmc.x - this.x,
            y: plmc.y - this.y,
        };

        const distance = sqrt(different.x ** 2 + different.y ** 2);

        const ratio = this.speed / distance;

        const moveX = different.x * ratio;
        const moveY = different.y * ratio;

        this.x += moveX;
        this.y += moveY;
    }

    draw() {
        con.fillStyle = "#ff0000";
        con.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    }
}

let enemy = new Enemy();
// const enemies = [];

export const updateEnemy = () => {
    enemy.move();
    enemy.draw();
    // if ()
};