# 関数
```
function hello (name:string) :void{
    console.log("hello, " + name + 'さん。')
}
hello("ぱんだ")
```

##  戻り値あり
```
function tasu(data: number[]): number {
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i]
    }
    return total
}

let data: number[] = [1, 2, 3]
console.log(tasu(data))
```

## letのスコープは { } 内
num 変数に注目してね
```
let num = 99 //関数の外側で定義
function printnum (){
    const num = "function_number" //関数内で定義
    console.log(num)
}
console.log(num) //99
printnum() //"function_number"
```
## 複数の値をreturnする
配列としてまとめて返すことができる
```
function getArr1(): number[] {
    return [1, 2, 3]
}
let x1 = getArr1()
console.log(x1)
```
### 戻り値に複数の型がある場合
```
function getArr2(): [number, string] {
    return [1, "2"]
}
let x2 = getArr2()
console.log(x2) //[1, "2"] 
```
### 戻り値のタプルを分割代入する
```
let [a, b] = getArr2()
console.log(a) //1
console.log(b) //"2"
```
### 引数の条件型
```
function func1(id:number|string){
    console.log(id)
}
func1("A00121")
func1(9999)
```
### 引数のオプション引数
```
function func1(username:string,age?:number){
    console.log(username + ',' + age)
}
func1("user1", 33) // "user1,33" 
func1("user2" ) // "user2,undefined" 
```
#### 引数の初期値
```
function func1(age:number, username:string = "名無し"){
    console.log(username + ',' + age)
}
func1(36, "user1") //"user1,36" 
func1(61) // "名無し,61" 
```
### 引数の可変長引数
引数の数が決まっていない場合とか
```
const f = (...data:number[]): number => {
    let total = 0
    for (let i of data){
        total += i
    }
    return total
}
console.log(f(1,2,3))
console.log(f(1,2,3,4,5,6,7,8,9,10))
```

## 無名関数、アロー関数
```
// これまでの記述
function f1 ():void{
    console.log("f1")
}
f1()
// 無名関数
let f2 = function():void {
    console.log("f2")
}
f2()

// アロー関数
let f3 = ():void => {
    console.log("f3")
}
f3()
```
## 内部関数
```
const parenteFunction = (num:number):void => {
    console.log("parenteFunction")
    //内部関数の定義
    const f = (t:number):void => {
        console.log("f関数がお知らせします。現在の加算状況：" + t)
    }
    let t = 0
    for(let i = 1; i<= num; i++){
        t += i
        f(t) //内部関数の呼び出し
    }
    console.log("最終結果：" + t)  
}
parenteFunction(100)

```

## 引数に関数を使う
```
const double = (n: number): number => { return n * 2 }
const jijou = (n: number): number => { return n * n }

const printResult = (n: number, f: (a: number) => number): void => {
    const result = f(n) //引数の関数を呼び出している
    console.log("結果は... " + result + " です！")
}
printResult(11, double)
```

## 戻り値が関数である関数
```
const f = (tax:number) :(n:number) => number => {
    return (n:number) => n * (1 + tax)
}

const f1 = f(0.1)
const f2 = f(0.08)

console.log(f1(1300))
console.log(f2(1300))
```

## 例外
関数側でErrorを返すだけだと？
```
//関数側
const f = (n:number) :number => {
    if ( n < 0) {
        throw Error("負の値です")
    }
    let total = 0
    for ( let i = 1 ; i <= n ; i++){
        total += i
    }
    return total
}

//呼び出し側
let result1 = f(-1)
console.log("例外が発生するとその場で中断されるので、この行は実行されない")

```

呼び出し側でtry...catchすることで、例外が発生したあとでも中断せずに処理を継続できる
```
//関数側(上とおなじ)
const f = (n:number) :number => {
    if ( n < 0) {
        throw Error("負の値です")
    }
    let total = 0
    for ( let i = 1 ; i <= n ; i++){
        total += i
    }
    return total
}

//呼び出し側
try {
    f(-10)
} catch(e) {
    console.log(e)
}
console.log("例外をキャッしたおかげで、この行は実行される")
```

## 総称型（ジェネリクス)
```
function getRnd<T>(values: T[]) :T {
    const r = Math.floor(Math.random() * values.length)
    return  values[r]
}

const data1 = [0,1,2,3,4]
const data2 = ['吉','凶', '大凶']

console.log(getRnd(data1))
console.log(getRnd(data2))
```

## ジェネレーター
```
function *gene() {
    let i = 1
    while (true){
        yield i + "回目"
        i += 1
    }
}

let g = gene()
for (let i = 0; i < 3; i++){
    let ob = g.next()
    console.log(ob.value) // 1回目〜3回目までが出力
}

console.log("---")
for (let i = 0; i < 3; i++){
    let ob = g.next()
    console.log(ob.value) // 4回目〜6回目までが出力
}
```

## Promise 非同期処理
### その前に...
ここでやることは、「非同期処理関数はこうやって書くんですよ〜」という話 *ではない* 。

...というのを読み解くのに時間がかかったわい。

アリモノの非同期処理関数（setTimeountとか）をつかったときに、「非同期関数のA, B, C を実行しました。

A,B,Cの順に実行され、B, C, A の順に完了しました私のアプリはこれで問題ナイ」ってことであれば、Promiseの出番はないの。

そうじゃなくて、「A関数(非同期)の結果（戻り値）を、B関数で使いたい」。

こういうときに、Promiseの出番なの。

```
// 非同期でAPIにリクエストを投げて値を取得する処理
function request1(): Promise<number> {
  return new Promise((fnc) => {
    setTimeout(() => {
      fnc(1);
    }, 1000);
  });
}
 
// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request2(result1: number): Promise<number> {
  return new Promise((fnc) => {
    setTimeout(() => {
      fnc(result1 + 1);
    }, 1000);
  });
}
 
// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request3(result2: number): Promise<number> {
  return new Promise((fnc) => {
    setTimeout(() => {
      fnc(result2 + 2);
    }, 1000);
  });
}
 
request1()
  .then((result1) => {
    return request2(result1);
  })
  .then((result2) => {
    return request3(result2);
  })
  .then((result3) => {
    console.log(result3); // 4
  });
```
