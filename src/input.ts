interface IKeyInputConfig {
    [key: string]: boolean;
}

class input {
    private keys: IKeyInputConfig;

    constructor() {
        this.keys = {};
        
        addEventListener("keydown", this.onKeyDown.bind(this));
        addEventListener("keyup", this.onKeyUp.bind(this));
    }

    private onKeyDown(e: KeyboardEvent): void {
        this.keys[e.key] = true;
    }

    private onKeyUp(e: KeyboardEvent): void {
        this.keys[e.key] = false;
    }

    isPressed(key: string): boolean {
        let myKey = this.keys[key];
        if (myKey) return myKey;
        return false;
    }
}

export const Input = new input();