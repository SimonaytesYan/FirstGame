import * as PIXI from "pixi.js";

export class Ammo {
    constructor(x,y){


        this.box_x = x;
        this.box_y = y;

        this.r = 20;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html документация
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0x00FF00);
        graphics.drawRect(this.box_x, this.box_y, this.r, this.r-5)
        graphics.endFill();
        return graphics
    }


}