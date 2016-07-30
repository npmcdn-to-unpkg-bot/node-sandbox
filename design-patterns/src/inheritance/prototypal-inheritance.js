
export function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function sayHi() {
  return `Hello, my name is ${this.name}`;
};
Person.prototype.sayAge = function sayAge() {
  return `I am ${this.age} years old`;
};

export function Employee(name, age, position) {
  Person.call(this, name, age);

  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.sayHi = function sayHi() {
  return Person.prototype.sayHi.call(this) + ` and my job title is "${this.position}"`
};
