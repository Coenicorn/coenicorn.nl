import { Vec2 } from "../vec2.js";

export class Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    cameraPos: Vec2;

    width: number;
    height: number;

    center: Vec2;

    constructor(elm: HTMLElement, w: number, h: number) {
        this.width = w;
        this.height = h;

        // create new canvas
        this.canvas = document.createElement("canvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d")!;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.canvas.style.backgroundColor = "black";
        this.canvas.style.position = "absolute";

        elm.appendChild(this.canvas);

        this.cameraPos = Vec2.ZERO;

        this.center = new Vec2(this.width * 0.5, this.height * 0.5);
    }

    getOffsetPosition(gamePos: Vec2): Vec2 {
        return this.cameraPos.add(gamePos).add(this.center);
    }

    clear(): void {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}