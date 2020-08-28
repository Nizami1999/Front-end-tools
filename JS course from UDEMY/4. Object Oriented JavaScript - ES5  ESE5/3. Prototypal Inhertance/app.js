// Person Constructor 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function()  {
  return `Hello there ${this.firstName} ${this.lastName}.`;
}

const person1 = new Person('Nizami', 'Alimamedov');
console.log(person1.greeting());

// Customer Constructor 
function Customer(firstName, lastName, phone, memmbership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.memmbership = memmbership;

}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer();
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function()  {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company!`;
}

// Create Customer
const customer1 = new Customer('Perviz','Namazli','994555666555','Standart');
console.log(customer1);
console.log(customer1.greeting()); 


