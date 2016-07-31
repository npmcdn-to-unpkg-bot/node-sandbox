
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `Hello, my name is ${this.name}`;
  }

  sayAge() {
    return `I am ${this.age} years old`;
  }
}

export class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);

    this.position = position;
  }

  sayHi() {
    return super.sayHi() + ` and my job title is "${this.position}"`;
  }
}
