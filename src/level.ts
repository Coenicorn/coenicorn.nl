import { importImage } from "./loader.js";
import { Renderer } from "./renderer/renderer.js";
import { Vec2 } from "./vec2.js";

interface ILevelConfig {
    tileSize: number;
    width: number;
    height: number;
    spawn: Vec2;
    layout: number[];
    spriteReference: HTMLImageElement[];
}

export class Level {
    // should have an array of entity ids, but I'm procrastinating making an ecs lol

    config: ILevelConfig;

    sprite: HTMLImageElement | null;

    spawn: Vec2;

    width: number;
    height: number;

    constructor(config: ILevelConfig) {
        this.width = config.width * config.tileSize;
        this.height = config.height * config.tileSize;

        this.spawn = config.spawn;

        this.config = config;

        this.sprite = null;

        let levelReference = this;
        this.getLevelSprite().then(sprite => { levelReference.sprite = sprite });
    }

    async getLevelSprite(): Promise<HTMLImageElement> {
        // generate level sprite based on layout
        let levelSprite = document.createElement("canvas");
        levelSprite.width = this.config.width * this.config.tileSize;
        levelSprite.height = this.config.height * this.config.tileSize;
        let levelContext = levelSprite.getContext("2d")!;
        levelContext.imageSmoothingEnabled = false;

        for (let y = 0; y < this.config.height; y++) {
            for (let x = 0; x < this.config.width; x++) {
                let index = x + y * this.config.width;
                let imgIndex = this.config.layout[index];

                let img = this.config.spriteReference[imgIndex];

                levelContext.drawImage(img, x * this.config.tileSize, y * this.config.tileSize, this.config.tileSize, this.config.tileSize);
            }
        }

        return importImage(levelSprite.toDataURL());
    }

    render(renderer: Renderer): void {
        if (!this.sprite) return;

        let pos = renderer.getOffsetPosition(Vec2.ZERO);

        renderer.context.drawImage(this.sprite, pos.x, pos.y, this.width, this.height);
    }
}

export type IlevelContainer = IobjectContainer<Level>;