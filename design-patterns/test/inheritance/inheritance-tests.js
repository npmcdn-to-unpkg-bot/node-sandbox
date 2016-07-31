
export function testPersonLikeClass(personConstructor) {
  describe('Person', () => {
    const name = `John Doe`,
    age = 56;

    beforeEach(function() {
      this.person = new personConstructor(name, age);
    });

    describe('.sayHi', () => {
      it(`says the person's name`, function() {
        // Arrange
        const expected = `Hello, my name is ${name}`;

        // Act
        const result = this.person.sayHi();

        // Assert
        expect(result).toEqual(expected);
      });
    });

    describe('.sayAge', () => {
      it(`says the person's age`, function() {
        // Arrange
        const expected = `I am ${age} years old`;

        // Act
        const result = this.person.sayAge();

        // Assert
        expect(result).toEqual(expected);
      });
    });
  });
}

export function testEmployeeLikeClass(employeeConstructor) {
  describe('Employee', () => {
    const name = `Jim Halpert`,
          age = 56,
          position = `Salesman`;

    beforeEach(function() {
      this.employee = new employeeConstructor(name, age, position);
    });

    describe('.sayHi', () => {
      it(`says the person's name`, function() {
        // Arrange
        const expected = `Hello, my name is ${name} and my job title is "${position}"`;

        // Act
        const result = this.employee.sayHi();

        // Assert
        expect(result).toEqual(expected);
      });
    });

    describe('.sayAge', () => {
      it(`says the person's age`, function() {
        // Arrange
        const expected = `I am ${age} years old`;

        // Act
        const result = this.employee.sayAge();

        // Assert
        expect(result).toEqual(expected);
      });
    });
  });
}
