// Person constructor
function Person(name, age, dob) {

  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function()  {
    const diff = Date.now() - this.birthday.getTime(); 
    
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }

  // console.log(this); // выведет все обьекты с данной функцией
  
  
   
}

console.log(this); // а если он не имеет отношения к функции он даст нам Window object
// this.alert(1)

const brad = new Person('Brad', 37, '09-03-84');
const john = new Person('John', 30, '04-02-84');

console.log(brad); // отдельное выведение каждого обьекта 
console.log(john); // отдельное выведение каждого обьекта 

// console.log(john.age);

// calculateAge
console.log(brad.calculateAge());

