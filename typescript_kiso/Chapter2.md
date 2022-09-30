
## 2-1. 値と変数
### 基本 
```
var charaname:string
charaname = "ラスカル"
let x:number
x = 66.5
var y = "15" 
```
* yに文字列が代入された時点でyの型は `string` に決まる
* なので、このあとyに数値を代入しようとすると、エラーになってくださいます(嬉)

### any型
```
let yabai //yabai変数は any型となる。何型も代入可能
yabai = 123
yabai = "文字列です" //エラーになっってくれない
```
* yabai = 123 で文字列型に決まる「わけではない」
* あくまで、yabaiはany型である（何でも受け付ける）ようだ

### 型変換
```
let x  = 10
let y = "20"
console.log(x + y) // "1020"
console.log(x + +y) // 30
```
* `+y` で文字列型からnumber型に変換している

## 2-2. 制御構文

### if文
```
let n = 4
let r = n % 2
if (r === 0) {
    console.log("偶数")
} else {
    console.log("奇数")
}
```
* 三項演算子で上と同じことを実現できる↓
```
let n = 3
let r
r = n % 2 === 0 ? '偶数' : '奇数'
console.log(r)
```

### switch文
```
var cursor:string
cursor = "right"
switch( cursor ) {
    case "right" : console.log("右に進みました"); break
    case "left" : console.log("左に進みました"); break
    case "up" : console.log("上に進みました"); break
    case "down" : console.log("下に進みました"); break
    default : console.log("入力内容が不正です")
}
```

### while文
```
let max = 10
let total = 0
let i = 1

while (i <= max) {
    total += i
    i++
}
console.log("1から" + max + "まで足し算していった結果は、" + total + "です。")
```

### for文
上のwhile文で書いた内容をforで書くと、
```
let max = 10
let total = 0

for (let i = 1; i <= max; i++){
    total += i
}
console.log( max + "までの合計: " + total )
```
for in や for ofは後述

## 2-3. 複雑な値

### 配列
```
let data = [1,2,3, "panda"]
data[0] = "panda" //これはエラーにならない！

let data2 = [1,2,3]
data2[0] = "panda" //これはエラー
```

配列に型を定義
```
const data:number[] = [ 99, 100, 80] 
```
このときは、`data[0]="panda"` と書くととエラーになる


const で配列を定義しても、要素を取り替えることはできてしまう
```
const data:number[] = [ 99, 100, 80] 
data[0] = 3
```
変更不可の配列の定義をしたい場合は、readonlyキーワードで
```
const data:readonly number[] = [ 99, 100, 80] 
data[0] = 3 //エラーになる
```

### forで配列をまわす
```
const scores: number[] = [99, 98, 100]
let t = 0
for (let s of scores) {
    t += s
}
console.log("合計: " + t)
console.log("平均: " + t / scores.length)
```

### 配列の要素の操作
```
//先頭に追加
let data: number[] = [1, 2, 3, 4, 5]
data.unshift(0)
console.log(data)

//末尾に追加
data.push(6)
console.log(data) // [0, 1, 2, 3, 4, 5, 6] 

//先頭の要素を削除
data.shift()
console.log(data) //[1, 2, 3, 4, 5, 6] 
```

### タプル
```
let p:[string, number]
p = ['A', 43]
p = ['AB', 55]
p = ['AB', '44'] //これはエラーになる
```

### enum
その1
```
enum c1 {r,l}
console.log(c1.r)
console.log(c1)
```
結果：
```
[LOG]: 0 
[LOG]: {
  "0": "r",
  "1": "l",
  "r": 0,
  "l": 1
} 
```
その2
```
enum c1 {r = "右",l = "左"}
console.log(c1.r)
console.log(c1)
```

結果:
```
[LOG]: "右" 
[LOG]: {
  "r": "右",
  "l": "左"
} 
```

## 2-4 型をさらにきわめる

### 型エイリアス

```
let data:[string, number]
```
これはタプル。 ↑これだと、値に何を期待してるのか分からないので、明確にしておきたければ型エイリアスを使う
```
// 型エイリアス定義
type name = string
type blood = string
type age = number
type person = [name, blood, age]

let user1:person = ['user1', 'AB', 23]
let user2:person = ['user2', 'B', 14]
let user3:person = ['user3', 14, 'O'] //エラー
```
```
// person型でまとめた配列を作る（難しい！）
let data:person[] = [user1, user2]
```
さらに、user3 タプルを作って、data配列にpush
```
let user3:person = ['user3', 'O', 43]
data.push(user3)
```
↓これは成功する、という例
```
let user4:[string, string,number]
user4 = ['a', 'b', 999]
data.push(user4)
```
ここでは、user4の型定義はpersonではないが、dataにpushできる

↓ もちろんこのuser5はエラーになる
```
let user5 : [string]
user5 = ['a']
data.push(user5) // not assignable to parameter of type 'person'.
```

* 新しい型を定義したわけではなく、別名（エイリアス）を定義しただけだから、元の型とあっていれば、代入できるのでしょう。

### 必須ではない　： "?"
```
type name = string
type power = number
type hobby = string
type person = [name, power, hobby?] //hobbyがオプションだよ
const baki:person = ['バキ', 99] //エラーにならない
const yujiro:person = ['ユウジロウ', 100,'豆腐の味噌汁作り']
```


## 2-4 のまとめ
```
// enum
enum bloodtype {
    a = "A", b = "B", o = "O", ab = "AB", unknow = "血液型不明"
}

// 型エイリアス
type name = string
type age = number
type person = [name, bloodtype, age?]

// person型の userXを作る
let user1: person = ['user1', bloodtype.a, 34]
let user2: person = ['user2', bloodtype.unknow, 94]

// personを要素とする配列
let person_arr: person[]

person_arr = [user1, user2]
for (let p of person_arr) {
    console.log(p)
}
```
別解（？）
```
// enum
enum bloodtype {
    a = "A", b = "B", o = "O", ab = "AB", unknow = "血液型不明"
}

// 型エイリアス
type name = string
type age = number


// タプル
let person : [name, bloodtype, age?]

person = ['user1', bloodtype.a, 34]

//配列
let data = [person]

//新しい要素を追加する
person = ['user2', bloodtype.b]
data.push(person)

console.log(data)
```