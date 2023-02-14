import { can, con, keys, sin, cos, random, FPS } from "./utility.js";
import { ownMachine } from "./own-machine.js";

const MG_BULLET_W = 2;
const MG_BULLET_H = 6;
const MG_MV = 10;
const MG_RPM = 600;
const MG_SPR = FPS / (MG_RPM / 60);

class MachineGunBullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.w = MG_BULLET_W;
        this.h = MG_BULLET_H;
        this.speed = MG_MV;
        this.direction = direction;
        this.moveDiffelence = {
            x: sin(this.direction) * this.speed,
            y: -cos(this.direction) * this.speed,
        };
        this.end = {
            x: -sin(this.direction) * this.h,
            y: cos(this.direction) * this.h,
        };
    }

    move() {
        this.x += this.moveDiffelence.x;
        this.y += this.moveDiffelence.y;
    }

    draw() {
        con.strokeStyle = "#bbaaaa";
        con.lineWidth = this.w;
        con.beginPath();
        con.lineTo(this.x, this.y);
        con.lineTo(this.x + this.end.x, this.y + this.end.y);
        con.stroke();
    }

    isInCanvas = () => 0 < this.y + this.h;
}

const machineGunBullets = [];

let count = 0;

export const updateMachineGun = () => {
    if (keys[" "]) {
        count++;
        if (count % MG_SPR === 1) {
            machineGunBullets.push(new MachineGunBullet(ownMachine.x, ownMachine.y, random(-5, 5)));
        }
    }
    else count = 0;

    con.fillText(machineGunBullets.length, 10, 10);

    let i = 0;
    while (i < machineGunBullets.length) {
        const bullet = machineGunBullets[i];
        bullet.draw();
        bullet.move();
        if (!bullet.isInCanvas()) {
            machineGunBullets.splice(i, 1);
        }
        else i++;
    }
};