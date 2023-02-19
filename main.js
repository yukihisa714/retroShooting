import { incrementFrame, FPS, CAN_H, CAN_W, con } from "./utility.js";
import { updateStars } from "./star.js";
import { updatePlmc } from "./players-machine.js";
import { test, updateMg } from "./weapon.js";
import { updateEnemy } from "./enemy.js";
import { drawEffects } from "./effect.js";

function mainLoop() {
    incrementFrame();

    con.clearRect(0, 0, CAN_W, CAN_H);

    updateStars();

    updateMg();

    updatePlmc();

    updateEnemy();

    drawEffects();
}

setInterval(mainLoop, 1000 / FPS);