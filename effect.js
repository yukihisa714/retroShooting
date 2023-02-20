import { con, FPS } from "./utility.js";

export class DamageCount {
    constructor(x, y, num, size, r, g, b, time) {
        this.x = x;
        this.y = y;
        this.num = num;
        this.size = size;
        this.width = con.measureText(`${this.num}`).width;
        this.rgb = `${r},${g},${b}`;
        this.time = ~~(time * FPS);
        this.timeCount = this.time;
    }

    update() {
        // this.y -= this.size / 20;
        this.timeCount--;
    }

    draw() {
        const left = this.x - this.width / 2;
        const bottom = this.y + this.size / 2;
        const a = `${this.timeCount / this.time}`;
        con.fillStyle = `rgba(${this.rgb},${a})`;
        con.font = `${this.size}px sans-serif`;
        con.fillText(this.num, left, bottom);
    }
}

export const damageCounts = [];

const updateDamageCounts = () => {
    let i = 0;
    while (i < damageCounts.length) {
        const damageCount = damageCounts[i];
        damageCount.update();
        damageCount.draw();
        if (!damageCount.timeCount) {
            damageCounts.splice(i, 1);
        }
        else i++;
    }
};


export const drawEffects = () => {
    updateDamageCounts();
};