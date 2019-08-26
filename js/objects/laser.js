import * as PIXI from "pixi.js";

export class laser {
    constructor(cur_x, cur_y, dist_x, dist_y) {
        this.cur_x = cur_x;
        this.cur_y = cur_y;

        this.r = 7;
        this.dist_x = dist_x;
        this.dist_y = dist_y;

        this.startx = cur_x;
        this.starty = cur_y
        this.deltaX = dist_x - cur_x;
        this.deltaY = dist_y - cur_y;

        this.sin = this.deltaY / Math.sqrt(this.deltaX ** 2 + this.deltaY ** 2);
        this.cos = this.deltaX / Math.sqrt(this.deltaX ** 2 + this.deltaY ** 2);

        this.shag = 9;
        this.ready = false
    }


   newcoord  = () =>{       //вычисление новых координаты

        this.cur_x += this.cos*this.shag
        this.cur_y += this.sin*this.shag

    }

    draw() {
        // ToDo: Вызвать этот метод

        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        this.newcoord();

        //console.log ( this.cur_x)


        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xDC143C);
        graphics.drawCircle(this.cur_x, this.cur_y, this.r);
        graphics.endFill();

        if (Math.abs(this.deltaX) <= Math.abs(this.startx - this.cur_x) && Math.abs(this.deltaY) <= Math.abs(this.starty - this.cur_y)
            || Math.sqrt((this.startx - this.cur_x)**2 + (this.starty - this.cur_y)**2 ) > 650 ){
            this.ready = true
        }
        return graphics
    }
}