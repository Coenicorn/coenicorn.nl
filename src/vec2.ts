export class Vec2 {
    constructor(
        public x: number,
        public y: number
    ) { };

    add(v: number | Vec2) {
        let out = this.copy();

        if (v instanceof Vec2) {
            out.x += v.x;
            out.y += v.y;
        } else {
            out.x += v;
            out.y += v;
        }

        return out;
    }

    sub(v: number | Vec2) {
        let out = this.copy();

        if (v instanceof Vec2) {
            out.x -= v.x;
            out.y -= v.y;
        } else {
            out.x -= v;
            out.y -= v;
        }

        return out;
    }

    mult(v: number | Vec2) {
        let out = this.copy();

        if (v instanceof Vec2) {
            out.x *= v.x;
            out.y *= v.y;
        } else {
            out.x *= v;
            out.y *= v;
        }

        return out;
    }

    div(v: number | Vec2) {
        let out = this.copy();

        if (v instanceof Vec2) {
            out.x /= v.x;
            out.y /= v.y;
        } else {
            out.x /= v;
            out.y /= v;
        }

        return out;
    }

    get magnitude(): number {
        return Math.abs(Math.sqrt(this.x * this.x + this.y * this.y));
    }

    set magnitude(v: number) {
        let m = this.magnitude, out = this.copy();
        out.x = this.x / m * v;
        out.y = this.y / m * v;
    }

    copy(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    static get ZERO(): Vec2 {
        return new Vec2(0, 0);
    }
    static get UP(): Vec2 {
        return new Vec2(0, -1);
    }
    static get DOWN(): Vec2 {
        return new Vec2(0, 1);
    }
    static get LEFT(): Vec2 {
        return new Vec2(-1, 0);
    }
    static get RIGHT(): Vec2 {
        return new Vec2(1, 0);
    }
}