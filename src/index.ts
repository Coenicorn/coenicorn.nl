import Game from "./game.js";
import { loadAssets } from "./loader.js"

let game: Game;

const fileNames = [
    "dirt_1",
    "dirt_2",
    "grass_side_left",
    "grass_side_right",
    "grass_side_left",
    "grass_top_left",
    "grass_top_right",
    "grass_top"
];
const assetDir = "./build/assets"

function main() {
    console.log("[Assets] Started loading assets...");

    loadAssets(fileNames, assetDir).then((images) => {
        console.log("[Assets] Done loading!");

        game = new Game(document.getElementById("main")!, 500, 500, images);

        game.init();
    });
}

onload = main;