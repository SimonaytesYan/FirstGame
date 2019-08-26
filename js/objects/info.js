export class Info {
    constructor(playerX, playerY, score, hp, ammos) {
        this.text = `PlayerX: ${playerX}\nPlayerY: ${playerY}\nScore: ${score}\nHP: ${hp}\nAmmo: ${ammos}`
        console.log(ammos)
    }

    draw() {
        const basicText = new PIXI.Text(this.text, {fill: 0xFFFFFF, fontSize: 14});
        basicText.x = 0;
        basicText.y = 0;
        basicText.score = 0;
        basicText.hp = 0;
        basicText.ammos = 0;

        return basicText
    }
}