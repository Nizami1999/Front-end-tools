// set local storage item -- они хранятся если даже перезапустить браузер в отличии от session

localStorage.setItem('Name', 'Nizami');
localStorage.setItem('Age', 20);

// set session storage item
sessionStorage.setItem('Name', 'Nizami') // удаляются после перезапуска

//remove from storage
// localStorage.removeItem();

//clear
// localStorage.clear();

const name = localStorage.getItem('Name');
const age = localStorage.getItem('Age');

// console.log(name, age);

// Adding an Element to localStorage through form 

const form = document.querySelector('form');

form.addEventListener('submit', addItem);

function addItem(e) {

  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null ) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));   // Use JSON.parse() to convert text into a JavaScript object
  }

  tasks.push(task);

   localStorage.setItem('tasks', JSON.stringify(tasks)); // convert js object to string (JSON.stringfy)

   alert('Task Saved');
  
   e.preventDefault();
};





