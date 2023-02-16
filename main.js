import { incrementFrame, FPS, CAN_H, CAN_W, con } from "./utility.js";
import { updateStars } from "./star.js";
import { updatePlmc } from "./players-machine.js";
import { updateMg } from "./weapon.js";
import { updateEnemy } from "./enemy.js";

function mainLoop() {
    incrementFrame();

    con.clearRect(0, 0, CAN_W, CAN_H);

    updateStars();

    updateMg();

    updatePlmc();

    updateEnemy();

    for (let i = 0; i < 255; i++) {
        con.fillStyle = `rgb(${i},${255 - i},0)`;
        con.fillRect(i, 280, 1, 20);
    }
}

setInterval(mainLoop, 1000 / FPS);