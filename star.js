import { can, CAN_H, con, FPS, random } from "./utility.js";

const STARS_NUM = 100;
const STAR_SIZE_MIN = 0.5;
const STAR_SIZE_MAX = 2.5;
const GET_RANDOM_STAR_SIZE = () => random(STAR_SIZE_MIN, STAR_SIZE_MAX);

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = GET_RANDOM_STAR_SIZE();
        this.speed = this.size * 15 / FPS;
        this.color = `rgb(${~~random(150, 255)},${~~random(150, 255)},${~~random(150, 255)})`;
    }

    move() {
        this.y += this.speed;
    }

    draw() {
        con.fillStyle = this.color;
        con.fillRect(this.x, this.y, this.size, this.size);
    }

    isInCanvas = () => this.y < CAN_H;
}

const stars = [];
while (stars.length < STARS_NUM) {
    stars.push(new Star(random(-STAR_SIZE_MAX, can.width), random(-STAR_SIZE_MAX, can.height)));
}

export const updateStars = () => {
    stars.forEach((star, index) => {
        star.draw();
        star.move();
        if (!star.isInCanvas()) {
            stars.splice(index, 1, new Star(random(-STAR_SIZE_MAX, can.width), -STAR_SIZE_MAX));
        }
    });
};