import { IlevelContainer, Level } from "./level.js";
import { IimageContainer } from "./loader.js";
import { Renderer } from "./renderer/renderer.js";
import Time from "./time.js";
import { Vec2 } from "./vec2.js";

export default class Game {
    width: number;
    height: number;

    running: boolean;

    levels: IlevelContainer;
    currentLevel: string;

    renderer: Renderer;

    assets: IimageContainer;

    constructor(elm: HTMLElement, width: number, height: number, assets: IimageContainer) {
        this.width = width;
        this.height = height;

        this.running = false;

        this.levels = {};
        this.currentLevel = "hub";

        this.renderer = new Renderer(elm, this.width, this.height);

        this.assets = assets;
    }

    init(): void {
        // initialize levels
        this.levels["hub"] = new Level(this.assets["dirt_1"], 100, 100, new Vec2(0, 0));

        this.running = true;
        
        Time.init();

        this.update();
    }

    update(): void {
        // update timer
        Time.tick();

        // show fps
        document.getElementById("fps")!.innerHTML = `fps: ${Math.round(Time.deltaTime * Time.fps)}`;

        this.render();

        if (this.running)
            requestAnimationFrame(this.update.bind(this));
    }

    render(): void {
        // render the level
        let l = this.levels[this.currentLevel];
        if (!l) throw new Error(`Level ${this.currentLevel} does not exist`);

        this.levels[this.currentLevel].render(this.renderer);
    }
}