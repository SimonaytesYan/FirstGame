import * as PIXI from "pixi.js";

export class Enemy {
    constructor(x,y){


        this.enemypos = Math.floor(Math.random() * 4);
        switch(this.enemypos)
        {
            case 0:     //Спавн врага за правой границей
            {
                this.enemy_x = window.innerWidth + 10;

                this.enemy_y = Math.floor(Math.random() * window.innerHeight);
            }
            break;
            case 1:     //Спавн врага за нижней границей
            {
                this.enemy_x = Math.floor(Math.random() * window.innerWidth);
                this.enemy_y = window.innerHeight + 10;
            }
            break;
            case 2:     //Спавн врага за левой границей
            {
                this.enemy_x = -10;
                this.enemy_y = Math.floor(Math.random() * window.innerHeight);
            }
            break;
            case 3:     //Спавн врага за верхней границей
            {
                this.enemy_x = Math.floor(Math.random() * window.innerWidth);
                this.enemy_y =-10;
            }
            break;
        }
        //this.enemy_x = window.innerWidth / 2;
        //this.enemy_y =100;
        this.r = Math.floor(Math.random()*2);
        if (this.r === 1){
            this.r = 10
            this.healpoint = 1;
            this.speed = 2.5;
        }
        else
        {
            this.healpoint = 2;
            this.r = 15
            this.speed = 0.01;
        }

        this.player_x = x;
        this.player_y = y;
    }


    move = () =>{
        let deltaX = this.player_x - this.enemy_x;
        let deltaY = this.player_y - this.enemy_y;

        let sin = deltaY / Math.sqrt(deltaX ** 2 + deltaY ** 2) + Math.floor(Math.random());
        let cos = deltaX / Math.sqrt(deltaX ** 2 + deltaY ** 2) + Math.floor(Math.random());
        this.enemy_x += cos*this.speed
        this.enemy_y += sin*this.speed
        this.enemy_x+=Math.floor(Math.random()*2)
        this.enemy_y+=Math.floor(Math.random()*2)
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html документация
        const graphics = new PIXI.Graphics();

        this.move(this.player_x, this.player_y);

        if (this.r == 10) {
            graphics.beginFill(0x00FA9A);
        }
        else{
            graphics.beginFill(0x4682B4);
        }
        graphics.drawCircle(this.enemy_x, this.enemy_y, this.r);
        graphics.endFill();

        return graphics
    }


}