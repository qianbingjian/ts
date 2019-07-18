class Cat {
    constructor(name) {
        this.name = name;
    }
    sayHai() {
        return `my name is ${this.name}`;
    }
}
let Tom = new Cat('bob');
Tom.name = "tom";
console.log(Tom.sayHai());
