class Person{
  constructor(firstName, lastName)  {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting()  {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams')

mary.getMarried('Thompson');

console.log(mary.greeting());

console.log(Person.addNumbers(1,8));
