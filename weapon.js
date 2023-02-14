import { can, con, keys, sin, cos, random } from "./utility.js";
import { ownMachine } from "./own-machine.js";

class MachineGunBullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.w = 3;
        this.h = 6;
        this.speed = 20;
        this.direction = direction;
    }

    move() {
        this.x += sin(this.direction) * this.speed;
        this.y -= cos(this.direction) * this.speed;
    }

    draw() {
        con.fillStyle = "#aaaaaa";
        con.fillRect(this.x - this.w / 2, this.y, this.w, this.h);
    }
}

const MachineGunBullets = [];

export const updateMachineGun = () => {
    if (keys[" "]) {
        MachineGunBullets.push(new MachineGunBullet(ownMachine.x, ownMachine.y, random(-5, 5)));
    }

    for (const bullet of MachineGunBullets) {
        bullet.draw();
        bullet.move();
    }
}