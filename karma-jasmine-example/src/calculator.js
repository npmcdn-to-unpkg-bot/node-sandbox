
export class Calculator {
  add(...values) {
    return values
      .map(value => Number.parseFloat(value))
      .filter(value => !Number.isNaN(value))
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
  }
}