// Object.prototype
// Person.prototype


// Person constructor
function Person(firstName, lastName, dob) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function()  {
  //   const diff = Date.now() - this.birthday.getTime(); 
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);

  // }
}

// С помошью прототипов мы можем добавить новую фунцию вне кода

// Calculate Age
Person.prototype.calculateAge = function()  {
  const diff = Date.now() - this.birthday.getTime(); 
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);

}   

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;  
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', '2-11-93');

console.log(mary);
console.log(mary.calculateAge()); // она будет роботать хоть и функция внутри прототипа 
console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

// Теперь посмотрим на прототпы внутри prototype Object
// hasOwnProperty
// Простой синтакс не нужно писать .prototype.object ... и т.д

console.log(mary.hasOwnProperty('firstName')); // True
console.log(mary.hasOwnProperty('getFullName')); // False // так как не находится в исходном коде а в самом прототипе


// Loop Checking

if (mary.hasOwnProperty('previousName')){
  console.log('Yes!');
}

else{
  console.log('No!');
};






