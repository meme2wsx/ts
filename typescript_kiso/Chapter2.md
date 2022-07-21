
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
var a  = 10
var b = "20"
a += +b
console.log('私は、今月に入ってから' + a + '本のとうもろこしを食べました')
```
* `+b` で文字列型からnumber型に変換している

## 2-2. 制御構文

### if文
```
const num = 3
const result = num %2
if (result === 0) {
    console.log(num + "は偶数である")
}
else {
    console.log(num + "は奇数である")
}
```
* 何の変哲もないif文。
* 三項演算子で上と同じことを実現できる↓
```
var num = 3
var result
result = num % 2 ===0 ? '偶数' : '奇数'
console.log(num + 'は' + result + 'である')
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
const max = 10
let total = 0
let i = 1
while (i <= max){
    total += i
    i++
}
console.log( max +"までの合計: " + total )
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
const data = [ 99, 100, "panda"]
for (let d of data){
 console.log(d)  
}
data[0] = " panda" //エラーにならない（怖）
console.log(data[0])
```

配列に型を定義
```
const data:number[] = [ 99, 100, 80] 
```
このときは、`data[0]="panda"` と書くととエラーになる

