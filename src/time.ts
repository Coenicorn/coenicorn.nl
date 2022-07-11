class time {
    private _deltaTime: number;
    private _frameTime: number;
    private _lastTimeStep: number;
    private _FPS: number;
    private _targetFrameTime: number;

    constructor(fps: number) {
        this._FPS = fps;
        // 1000 milliseconds === one second
        this._targetFrameTime = 1000 / fps;
        this._deltaTime = 0;
        this._lastTimeStep = 0;
        this._frameTime = 0;
    }

    tick(): void {
        let currentTimeStep = Date.now();
        this._frameTime = currentTimeStep - this._lastTimeStep;
        this._deltaTime = this._frameTime / this._targetFrameTime;
        this._lastTimeStep = currentTimeStep;
    }

    init(): void {
        this._lastTimeStep = Date.now();
    }

    get deltaTime(): number {
        return this._deltaTime;
    }

    get fps(): number {
        return this._FPS;
    }

    get frameTime(): number {
        return this._frameTime;
    }
}

const Time = new time(60);

export default Time;