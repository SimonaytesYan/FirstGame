import * as PIXI from "pixi.js";

export class healbox {
    constructor(x,y){


        this.box_x = x;
        this.box_y = y;

        this.r = 20;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html документация
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xB22222);
        //graphics.drawCircle(this.box_x, this.box_y, this.r);
        graphics.drawRect(this.box_x, this.box_y, 20, 15)
        graphics.endFill();
        return graphics
    }


}