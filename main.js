import { can, con, random, sin, cos, FPS } from "./utility.js";
import { updateStars } from "./star.js";
import { updateOwnMachine } from "./own-machine.js";
import { updateMachineGun } from "./weapon.js";

function mainLoop() {
    con.clearRect(0, 0, can.width, can.height);

    updateStars();

    updateMachineGun();

    updateOwnMachine();
}

setInterval(mainLoop, 1000 / FPS);