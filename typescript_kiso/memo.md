# 変数の宣言、代入

宣言と代入をいっぺんにやるやりかた
```
let hoge1 = 1
```
別個にやるやりかた
```
let hoge2:number
hoge2 = 2
```
禁断？のany型の変数を作るやりかた
```
let hoge
hoge = 3
```
これやるとhogeはany型になる..

# 配列の宣言、代入
宣言と代入をいっぺんにやるやりかた
```
let arr1 = [1,2,3,4,5]
```
宣言と代入をいっぺんにやるやりかた
```
let arr2:number[] = new Array()
arr2 = [10, 11, 12]
```
* 宣言時に要素数を決めないのか(Javaとちがう)



# タプル
タプルをつくるだけ：
```
[型1, 型2, ...]
```

```
let t: [string, number]
t = ['panda', 90]
```

# 型エイリアス
charaname型, age型を作る
```
type charaname = string
type age = number
```

作った型でさらにperson型をつくる
```
type person = [charaname, age]
```
person型で配列を宣言、代入
```
let baki:person = ["刃牙", 15]
let motobe:person = ["もとべ", 50]
```

person型の値を持つ配列を、配列dataに格納
```
let data:person[] = [baki, motobe]
```
これはエラーになる。pandaが person型ではないから
```
let data2:person[] = [baki, motobe, "panda"]
```
これはエラーにならない...!
```
let data2:person[] = [baki, motobe, ["aaa", 123]]
```