import { can, con, random, sin, cos } from "./utility.js";
import { updateStars } from "./star.js";
import { updateOwnMachine } from "./own-machine.js";
import { updateMachineGun } from "./weapon.js";

function mainLoop() {
    con.clearRect(0, 0, can.width, can.height);

    updateStars();

    updateOwnMachine();

    updateMachineGun();
}

setInterval(mainLoop, 1000 / 30);