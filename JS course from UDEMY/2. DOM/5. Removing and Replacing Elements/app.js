// Replace Element -----------------------------------------------

// Create
const newHeading = document.createElement('h2');
// Add Id 
newHeading.id = 'task-title';

// text
// newHeading.appendChild(document.createTextNode('Task List'));
newHeading.innerHTML = 'Task List';

// Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);
 


//Removing -----------------------------------------------------

const li = document.querySelectorAll('li');
const list = document.querySelector('ul');

li[0].remove();
list.removeChild(li[3]);

// Classes --------------------------------------

const lis = document.querySelector('li:first-child');
const link = lis.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
//add class and remove
link.classList.add('test')
link.classList.remove('test');

val = link.classList;


// Attributes -----------------------------------

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title'); // because ve have not this attribute
link.removeAttribute('title'); // но его нет как бы



console.log(val);
