import { con, keys, sin, cos, random, FPS } from "./utility.js";
import { plmc } from "./players-machine.js";
import { enemies } from "./enemy.js";
import { DamageCount, damageCounts } from "./effect.js";

const MG_BULLET_W = 2;
const MG_BULLET_H = 6;
const MG_MV_PPS = 300;
const MG_MV_PPF = MG_MV_PPS / FPS;
const MG_RPM = 300;
const MG_SPR = ~(FPS / (MG_RPM / 60));
const MG_MOA = 5;

const MG_DAMAGE = 10;

class MgBullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.w = MG_BULLET_W;
        this.h = MG_BULLET_H;
        this.speed = MG_MV_PPF;
        this.direction = direction;
        this.moveDiffelence = {
            x: sin(this.direction) * this.speed,
            y: -cos(this.direction) * this.speed,
        };
        this.end = {
            x: -sin(this.direction) * this.h,
            y: cos(this.direction) * this.h,
        };
        this.damage = MG_DAMAGE;
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

    inFlictDamage(enemy) {
        enemy.hp -= this.damage;
    }

    isInCanvas = () => 0 < this.y + this.h;

    isCollisionEnemy = () => {
        let flg = false;
        let i = 0;
        while (i < enemies.length) {
            const enemy = enemies[i];
            if (enemy.left < this.x && this.x < enemy.right) {
                if (enemy.top < this.y && this.y < enemy.bottom) {
                    flg = true;
                    break;
                }
            }
            i++;
        }
        return { flg, i };
    }
}

const mgBullets = [];

let count = 0;

export const updateMg = () => {
    if (keys[" "]) {
        count++;
        if (count % MG_SPR === 1) {
            mgBullets.push(new MgBullet(plmc.x, plmc.y, random(-MG_MOA / 2, MG_MOA / 2)));
        }
    }
    else count = 0;

    con.fillText(mgBullets.length, 10, 10);

    let i = 0;
    while (i < mgBullets.length) {
        const bullet = mgBullets[i];
        bullet.draw();
        bullet.move();
        const collisionFlg = bullet.isCollisionEnemy();
        if (!bullet.isInCanvas()) {
            mgBullets.splice(i, 1);
        }
        else if (collisionFlg.flg) {
            const enemy = enemies[collisionFlg.i];
            bullet.inFlictDamage(enemy);
            damageCounts.push(new DamageCount(
                enemy.x + enemy.w * 0.25,
                enemy.y - enemy.h * 1,
                bullet.damage,
                10,
                255, 255, 255,
                0.5
            ));
            // console.log(new DamageCount(
            //     enemy.x + enemy.w * 0.25,
            //     enemy.y - enemy.h * 1,
            //     bullet.damage,
            //     10,
            //     255, 255, 255,
            //     0.5
            // ));
            mgBullets.splice(i, 1);
        }
        else i++;
    }
};

export const test = [];