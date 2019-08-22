import {Player} from "./player";
import {Info} from "./info"
import {laser} from "./laser"


export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(0, 0)
        this.ArrayLaser = []
        // ToDo: Создать массив лазеров
    }

    click(x,y){
        this.ArrayLaser.push(new laser(this.player.x, this.player.y, x,y))
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
        for (let i = 0; i < this.ArrayLaser.length; i+=1 )
        {
            if (this.ArrayLaser[i].ready == true)
            {
                this.ArrayLaser.splice(i,1)
            }
        }
        return [this.player, new Info(this.player.x, this.player.y), ...this.ArrayLaser]
    }

}

