import { CAN_H, CAN_W, con, FPS } from "./utility.js";

export class DamageCount {
    constructor(x, y, num, size, r, g, b, time) {
        this.x = x;
        this.y = y;
        this.num = num;
        this.size = size;
        this.width = con.measureText(`${this.num}`).width;
        this.rgb = `${r},${g},${b}`;
        this.frame = ~~(time * FPS);
        this.frameCount = this.frame;
    }

    update() {
        // this.y -= this.size / 20;
        this.frameCount--;
    }

    draw() {
        const left = this.x - this.width / 2;
        const bottom = this.y + this.size / 2;
        const a = `${this.frameCount / this.frame}`;
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
        if (!damageCount.frameCount) {
            damageCounts.splice(i, 1);
        }
        else i++;
    }
};

export class ScreenEffect {
    constructor(r, g, b, time) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.time = time;
        this.frame = ~~(this.time * FPS);
        this.frameCount = this.frame;
    }

    update() {
        this.frameCount--;
    }

    draw() {
        con.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.frameCount / this.frame})`;
        con.fillRect(0, 0, CAN_W, CAN_H);
    }
}

export const screenEffects = [];

const updateScreenEffects = () => {
    let i = 0;
    while (i < screenEffects.length) {
        const screenEffect = screenEffects[i];
        screenEffect.update();
        screenEffect.draw();
        if (!screenEffect.frameCount) {
            screenEffects.splice(i, 1);
        }
        else i++;
    }
}


export const drawEffects = () => {
    updateDamageCounts();

    updateScreenEffects();
};