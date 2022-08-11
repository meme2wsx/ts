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
// Heroクラス
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

// enumでSwordクラスを作成
enum Sword {
    takenoko = 'タケノコソード',
    fire = 'ほのおのつるぎ',
    bokuto = '木刀'
}

// SuperHeroクラスの定義
class SuperHero extends Hero {
    sword: Sword

    constructor(name: string, lebel: number, s: Sword) {
        super(name, lebel)
        this.sword = s
    }
    print(): void {
        console.log(this.name + ' レベル: ' + this.lebel + ' 武器: ' + this.sword)
    }
}

const h2 = new SuperHero("みゆき", 999, Sword.bokuto)
h2.print()
// [LOG]: "みゆき レベル: 999 武器: 木刀" 
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
