import { Renderer } from "./renderer/renderer.js";
import { Vec2 } from "./vec2.js";

export class Level {
    // should have an array of entity ids, but I'm procrastinating making an ecs lol

    sprite: HTMLImageElement;

    spawn: Vec2;

    width: number;
    height: number;

    constructor(s: HTMLImageElement, w: number, h: number, spawn: Vec2) {
        this.sprite = s;

        this.width = w;
        this.height = h;

        this.spawn = spawn;
    }

    render(renderer: Renderer): void {
        let pos = renderer.getOffsetPosition(Vec2.ZERO);

        renderer.context.drawImage(this.sprite, pos.x, pos.y);
    }
}

export type IlevelContainer = IobjectContainer<Level>;