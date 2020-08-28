// Creating li, ul
const li = document.createElement('li');
const ul = document.querySelector('ul.collection');
// Add class
li.className = 'collection-item';

// Add text
li.textContent = 'List Item'

// Create Link, add class, and attribute and finally add icon element.
const link = document.createElement('a');
link.className = 'delete-item secondary-content'; 
link.setAttribute('href','#');
link.innerHTML = '<i class="fa fa-remove"></i>';

// add link to li
li.appendChild(link);

// add li to ul
ul.appendChild(li);

// Perfect!!! Element is added
console.log(li);
