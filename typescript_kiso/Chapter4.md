# クラス

```
class Hero {
    name: string
    lebel: number

    //コンストラクター
    constructor(name: string = '名無し', lebel: number = 1) {
        this.name = name
        this.lebel = lebel

    }
    print():void{
        console.log(this.name  + ' レベル: '+ this.lebel )
    }
}

const h1 = new Hero("はじめ", 99)
h1.print()

const h2 = new Hero()
h2.print()
```

### instanceofは演算子だよ
```
// 上の例文に加えて以下の行を追記する
class Enemy{}
console.log(h1 instanceof Hero) //True
console.log(h1 instanceof Enemy) // False
```

# 継承
```
class Hero {
    name: string
    revel: number

    constructor(name: string = "名無しの勇者", revel: number = 1) {
        this.name = name
        this.revel = revel
    }

    print(): void {
        console.log(this.name + "(レベル: " + this.revel + ")")
    }
}


enum sword { fire = "炎のつるぎ", take = "タケノコのつるぎ", boku = "木刀" }

class SuperHero extends Hero {
    sword: sword

     // nameとrevelを?にすることで、
     // nameとrebelは引数がなければ親(super)クラスのデフォルト値が代入される
    constructor(s: sword, name?: string, revel?: number) {
        super(name, revel)
        this.sword = s
    }
}

let h1 = new SuperHero(sword.fire)
h1.print()
```

# アクセス修飾子
```
class X {
    private x: string //privateにした

    constructor(x: string) {
        this.x = x
    }

    get getsetX(): string {
        return this.x
    }
    set getsetX(x: string) {
        this.x = x
    }
    print(): void {
        console.log('I am ' + this.x)
    }
}

const a = new X("panda")
a.print() //[LOG]: "I am panda" 

a.x = "cat" ★エラー
a.getsetX = String("cat") //OK。妙な書き方だ...

a.print() //[LOG]: "I am cat" 

console.log(a.x)  ★エラー
console.log(a.getsetX)//OK. cat が表示される
```
* getsetXのあとに、()は不要
* gettterもsetterも同じ名前（`getsetX`) を用いることが可能

# インターフェース
```
interface Creature {
    type: string
    print(): void
}

// 村人
class Murabito implements Creature {
    type: string = '村人'
    print(): void {
        console.log(this.type)
    }
}

// モンスター
class Monster implements Creature {
    type: string = "モンスター"
    print(): void {
        console.log(this.type)
    }
}

let mura1 = new Murabito()
let mon1 = new Monster()

let data:Creature[] = [mura1, mon1]

for (let creature of data) {
    creature.print()
}
```
* プロパティやメソッドの定義はできるが、具体的な値や実装は書かない
*  interfaceをimplementsしたクラスは値と実装が義務付けられる
* たとえば、Monsterがprint()をオーバーライドしない場合は、コンパイルエラーに

