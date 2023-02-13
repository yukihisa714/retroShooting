import { can, con, random } from "./utility.js";
import { updateStars } from "./star.js";
import { updateOwnMachine } from "./own-machine.js";

function mainLoop() {
    con.clearRect(0, 0, can.width, can.height);

    updateStars();

    updateOwnMachine();
}

setInterval(mainLoop, 1000 / 30);