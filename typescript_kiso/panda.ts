class Hero {
    name: string
    lebel: number

    //コンストラクター
    constructor(name: string = '名無し', lebel: number = 1) {
        this.name = name
        this.lebel = lebel

    }
    print(): void {
        console.log(this.name + ' レベル: ' + this.lebel)
    }
}

enum Sword {
    takenoko = 'タケノコソード',
    fire = 'ほのおのつるぎ',
    bokuto = '木刀'
}

class SuperHero extends Hero {
    sword: Sword

    constructor(name: string, lebel: number, s: Sword) {
        super(name, lebel)
        this.sword = s
    }
    print():void{
        console.log(this.name + ' レベル: ' + this.lebel + ' 武器: ' + this.sword)
    }
}
const h2 = new SuperHero("みゆき", 999, Sword.bokuto)
h2.print()

