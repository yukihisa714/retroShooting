import { can, con, random, sin, cos, FPS } from "./utility.js";
import { updateStars } from "./star.js";
import { updatePlmc } from "./players-machine.js";
import { updateMg } from "./weapon.js";

function mainLoop() {
    con.clearRect(0, 0, can.width, can.height);

    updateStars();

    updateMg();

    updatePlmc();
}

setInterval(mainLoop, 1000 / FPS);