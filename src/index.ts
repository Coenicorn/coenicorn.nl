import Game from "./game.js";
import { loadAssets } from "./loader.js"

let game: Game;

const fileNames = [
    "grass",
    "water"
];
const assetDir = "./build/assets"

async function main() {
    console.log("[Assets] Started loading assets...");

    let images = await loadAssets(fileNames, assetDir);

    console.log("[Assets] Done loading!");

    console.log("[Game] Starting game...");

    game = new Game(document.getElementById("main")!, innerWidth, innerHeight, images);

    game.init();
}

onload = main;