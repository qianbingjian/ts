# [Typescript](https://www.tslang.cn)
## typescript学习笔记

----
### **boolean** *布尔*
- `let isDone: boolean = true;`
- `let isFinish: boolean = false;`
1. `let isNew: boolean = false;`
2. `let isOld: boolean = true;`

----
### **number** *数子支持进制数*
- `let decLiteral: number = 6;`
- `let hexLiteral: number = 0xf00d;`
- `let binaryLiteral: number = 0b1010;`
- `let octalLiteral: number = 0o744;`

### 元组 已知元素类型和数量的数组
- `let x:[sting, number] x=['hello',10]`

### 枚举类型 enum
- `enum Color {red, green, blue} let c: Color = Color.green`

### 任意类型 any
- `let list: any[] = [1, true, 'free']`

### 空值 void 没有任何类型

### never类型 

### Object 类型 非原始类型

### 类型断言
- `let someValue: any = 'this is a string'; let len: number = (<string>someVale).length let len: number = (someValue as string).length`