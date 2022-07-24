
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


変更不可の配列の定義
```
const animals:readonly string[] = ['パンダ', 'アリクイ']
```
* readonlyキーワードを使う
* この時、`animals[1] =  'ワオキツネザル'` はエラーになるよ
* 絶対に慣れない書き方だな...

### forで配列をまわす
```
const scores = [100, 99, 89, 97]
let total = 0
for (let score of scores){
    total += score
}
const avarage = total / scores.length
console.log('合計:' + total)
console.log('平均:' + avarage)
```

### 配列の要素の操作
```
const data:any = [11,12,13]
//先頭に追加
data.unshift('UNSHIFT')
console.log(data)  //["UNSHIFT", 11, 12, 13] 

// 配列の最後に追加
data.push('PUSH')
console.log(data) //["UNSHIFT", 11, 12, 13,"PUSH"] 

//先頭の要素を削除
data.shift()
console.log(data) //[11, 12, 13,"PUSH"] 
```

余談

1つ目で、`console.log(data.unshift('UNSHIFT'))`を実行すれば` ["UNSHIFT", 11, 12, 13]` が返ってくると思ったのだが、結果は 数値の `4` がreturn された。マニュアル見たら、
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
> 返値
> メソッドを呼び出した後のオブジェクトの新しい length プロパティの値です。

とのこと

### タプル
```
var me:[string,number]
me = ['バキ', 99]
console.log(me[0]) //バキ
me = ['モトベ', 10] 
me = ['カツミ', 'シンシンカイ'] //これはエラー
```

### enum
```
enum bloodtype { A, B, AB, O}
console.log(bloodtype.B) // 1
```
* どういうふうに使われるのか、まだわかない
* "A" や 'A' と言ったふうに囲まないのが正解
*  「enum型を定義する」のではなくて、「複数の値から一つ選ぶ方式の新しい型」を定義してるんだそうな
* ↑これもしっくりきてない

## 2-4 型をさらにきわめる

### 型エイリアス

```
let data:[string, number]
```
これはタプル。 ↑これだと、値に何を期待してるのか分からないので、明確にしておきたければ型エイリアスを使う
```
type name = string
type power = number
type person = [name, power]
const baki:person = ['バキ', 99]
const yujiro:person = ['ユウジロウ', 100]
const data:person[] = [baki, yujiro]

for (let i of data){
    console.log(i)
}
```
* nameやpowerは新しい型...ではなくて、stringやnumberの別名（エイリアス）
* `type person = [name, power]`  の `[name, power]`はタプルだよ。配列じゃないよ。値だったら配列だけどね
* で、作ったタプルぬ、personという別名をさずけているんだね


### 必須ではない場合は "?"
```
type name = string
type power = number
type hobby = string
type person = [name, power, hobby?] //hobbyがオプションだよ
const baki:person = ['バキ', 99] //エラーにならない
const yujiro:person = ['ユウジロウ', 100,'味噌汁']
```



