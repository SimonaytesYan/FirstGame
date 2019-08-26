import {Player} from "./player";
import {Info} from "./info"
import {laser} from "./laser"
import {Enemy} from "./Enemy"
import {healbox} from "./healbox"
import {Ammo} from "./Ammo"


export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(window.innerWidth / 2,window.innerHeight/2)
        this.ArrayLaser = []
        this.ArrayEnemy = []
        this.ArrayHeal_box = []
        this.ArrayAmmo = []


        setInterval(this.new_enemy, 400, this.player.x, this.player.y)


        this.score = 0;
        this.heal_point = 3;
        this.flag = false;
        this.last_time = 0;
        this.ammo = 20;
    }

    click(x,y){
        if (this.ammo <= 0) {
            this.ArrayLaser.push(new laser(this.player.x, this.player.y, x, y))
        }else
        {
            console.log(this.ammo)
            this.ArrayLaser.push(new laser(this.player.x, this.player.y, x, y))
            this.ArrayLaser.push(new laser(this.player.x, this.player.y, x+50, y))
            this.ArrayLaser.push(new laser(this.player.x, this.player.y, x-50, y))
            this.ammo -=1;
        }

    }
    new_enemy = (x,y) =>{
        if (this.ArrayEnemy.length < 40) {
            this.ArrayEnemy.push(new Enemy(x, y))
        }
    }

    new_healbox = (x,y) =>{
        if (this.ArrayHeal_box.length < 4)
        {
            this.ArrayHeal_box.push(new healbox(x,y))

        }
    }

    new_ammo = (x,y) =>{
        if (this.ArrayAmmo.length < 4)
        {
            this.ArrayAmmo.push(new Ammo(x,y))

        }
    }

    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {
                    case "a":
                        this.player.go_left();
                        break;
                    case "d":
                        this.player.go_right();
                        break;
                    case "s":
                        this.player.go_down();
                        break;
                    case "w":
                        this.player.go_up();
                        break;
                }
            }
        });

    };

    get_items() {
        // ToDo: Возвращать массив лазеров
        //for (let i = 0; i < this.ArrayLaser.length; i+=1 )
        //{

        //}
        //this.ArrayLaser = this.ArrayLaser.ready.filter(x => x == true)

        for (let i = 0; i < this.ArrayLaser.length; i+=1)           //цикл обработки всех взаимодействий в которых участвуют laser и enemy
        {
            for (let m = 0; m < this.ArrayEnemy.length; m+=1)
            {
                this.ArrayEnemy[m].player_x = this.player.x
                this.ArrayEnemy[m].player_y = this.player.y

                if (Math.sqrt((this.ArrayEnemy[m].enemy_x - this.ArrayLaser[i].cur_x)**2 +  (this.ArrayEnemy[m].enemy_y - this.ArrayLaser[i].cur_y)**2 ) <= this.ArrayEnemy[m].r+this.ArrayLaser[i].r)
                {



                    this.ArrayEnemy[m].healpoint -=1;
                    if (this.ArrayEnemy[m].healpoint <=0)
                    {
                        this.ArrayEnemy.splice(m,1)
                        let r = Math.floor(Math.random()*15)
                        if (r === 1)
                        {
                            this.new_healbox(this.ArrayEnemy[m].enemy_x,this.ArrayEnemy[m].enemy_y)
                        }
                        if (r === 1 || r === 2)
                        {
                            this.new_ammo(this.ArrayEnemy[m].enemy_x,this.ArrayEnemy[m].enemy_y)
                        }
                        if (this.ArrayEnemy[m].r == 15){
                            this.score+=15;
                        }
                        else{
                            this.score+=10;
                        }
                    }

                    this.ArrayLaser.splice(i,1)


                }
                if ( new Date().getTime() - this.last_time > 200 )
                {
                    if (Math.sqrt((this.ArrayEnemy[m].enemy_x - this.player.x) ** 2 + (this.ArrayEnemy[m].enemy_y - this.player.y) ** 2) <= this.ArrayEnemy[m].r + this.player.r) {
                        this.heal_point -= 1;
                        console.log(this.heal_point)
                        if (this.heal_point <= 0) {
                            this.flag = true
                        }
                        this.last_time = new Date().getTime()
                    }
                }
            }

            if (this.ArrayLaser[i].ready == true)
            {
                this.ArrayLaser.splice(i,1)
            }
        }
        if (this.flag)
        {
            this.ArrayAmmo = []
            this.ArrayEnemy = []
            this.ArrayLaser = []
            this.ArrayHeal_box = []
            this.heal_point = 3;
            this.score = 0;
            this.flag  = false;
            this.player.x = window.innerWidth / 2;
            this.player.y = window.innerHeight / 2;

        }

        for (let i = 0; i < this.ArrayHeal_box.length; i++)
        {
            if (Math.sqrt((this.ArrayHeal_box[i].box_x - this.player.x) ** 2 + (this.ArrayHeal_box[i].box_y - this.player.y) ** 2) <= this.ArrayHeal_box[i].r + this.player.r) {
                if (this.heal_point < 3) {
                    this.heal_point += 1
                    this.ArrayHeal_box.splice(i,1)
                }
            }
        }

        for (let i = 0; i < this.ArrayAmmo.length; i++)
        {
            if (Math.sqrt((this.ArrayAmmo[i].box_x - this.player.x) ** 2 + (this.ArrayAmmo[i].box_y - this.player.y) ** 2) <= this.ArrayAmmo[i].r + this.player.r) {

                this.ammo += 15
                this.ArrayAmmo.splice(i,1)
            }
        }

        return [ new Info(this.player.x, this.player.y, this.score, this.heal_point, this.ammo), ...this.ArrayHeal_box,this.player, ...this.ArrayLaser, ...this.ArrayEnemy ]
    }

}

