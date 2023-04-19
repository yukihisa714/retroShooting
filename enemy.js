import { CAN_H, CAN_W, con, drawHpGauge, FPS, frame, random, sqrt } from "./utility.js";
import { plmc } from "./players-machine.js";
import { ScreenEffect, screenEffects } from "./effect.js";

const ENEMY_W = 30;
const ENEMY_H = 30;
const ENEMY_PPS = 100;
const ENEMY_PPF = ENEMY_PPS / FPS;
const ENEMY_HP = 25;
const ENEMY_POWER = 10;
const ENEMY_OFFEND_SPEED = FPS;

const ENEMY_APP_POSI_Y = -ENEMY_H;

class Enemy {
    constructor(x) {
        this.x = x;
        this.y = ENEMY_APP_POSI_Y;
        this.w = ENEMY_W;
        this.h = ENEMY_H;
        this.speed = ENEMY_PPF;
        this.hp = ENEMY_HP;
        this.power = ENEMY_POWER;
        this.offendSpeed = ENEMY_OFFEND_SPEED;
        this.offendCount = 0;
    }

    update() {
        this.left = this.x - this.w / 2;
        this.right = this.x + this.w / 2;
        this.top = this.y - this.h / 2;
        this.bottom = this.y + this.h / 2;
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
        con.fillRect(this.left, this.top, this.w, this.h);
        con.fillStyle = "black";
        con.font = "10px sans-serif";
        con.fillText(this.hp, this.x, this.y);
        drawHpGauge(this.x, this.y - this.h * 0.8, this.w, this.h / 10, this.hp / ENEMY_HP);
    }

    inFlictDamage() {
        plmc.hp -= this.power;
        screenEffects.push (new ScreenEffect(255, 0, 0, 0.5));
    }

    isCollisionPlmc = () => {
        let flg = false;
        if (this.left <= plmc.x + plmc.w / 2 && plmc.x - plmc.w / 2 <= this.right) {
            if (this.top <= plmc.y + plmc.h && plmc.y <= this.bottom) {
                flg = true;
            }
        }
        return flg;
    };
}

export const enemies = [];

export const updateEnemy = () => {
    if (frame % (FPS * 2) === 0) {
        enemies.push(new Enemy(~~random(0, CAN_W)));
    }

    let i = 0;
    while (i < enemies.length) {
        const enemy = enemies[i];
        enemy.update();
        enemy.move();
        enemy.draw();

        if (enemy.isCollisionPlmc()) {
            enemy.offendCount++;
            if (enemy.offendCount % enemy.offendSpeed === 1) {
                enemy.inFlictDamage()
            }
        }

        if (enemy.hp <= 0) {
            enemies.splice(i, 1);
        }
        else i++;
    }
};