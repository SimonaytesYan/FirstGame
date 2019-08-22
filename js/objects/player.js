import * as PIXI from "pixi.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html документация
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }

    go_left = () => {
        this.x -= 10
        if (this.x < 0)
            this.x = window.innerWidth
    };

    go_right = () => {
        this.x += 10
        if (this.x > window.innerWidth)
            this.x = 0
    };

    go_up = () => {
        this.y -= 10
        if (this.y < 0)
            this.y = window.innerHeight
    };

    go_down = () => {
        this.y += 10
        if (this.y > window.innerHeight)
            this.y = 0
    }
}