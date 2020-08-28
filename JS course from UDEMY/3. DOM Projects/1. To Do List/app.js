const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

//Functions



form.addEventListener('submit', addItem);
taskList.addEventListener('click', deleteItem);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
//DOM load event
document.addEventListener('DOMContentLoaded', getTasks)

// Get Tasks from LS 
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else  {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task)  {

    //create li
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    //create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    // append processes
    li.appendChild(link);
    taskList.appendChild(li);

    if(li.firstChild.textContent === ''){
      li.remove();
    }

  })
}
 
// ADD NEW ITEM
function addItem(e){

  if(taskInput.value === ''){

    alert('Please, write your task');

  } 

    //create li
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    // append processes
    li.appendChild(link);
    taskList.appendChild(li);
    

  

  if(li.firstChild.textContent === ''){
    li.remove();
  }

  storeTaskInLocalStorage(taskInput.value);

  // removing previous text
  taskInput.value = '';   // обезательно ставь после функции с локальным сервером

  e.preventDefault()

}

// Store Task
function storeTaskInLocalStorage(task)  {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else  {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  if(task != ''){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  
}



// DELETE ITEM
function deleteItem(e) {

  if(e.target.parentElement.classList.contains('delete-item')){

    if(confirm('Are you sure?'))  {
      e.target.parentElement.parentElement.remove();  
       
      //Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS 
function removeTaskFromLocalStorage(taskItem) {

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else  {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index)  {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }

  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
   
}

// CLEAR ALL ITEMS
function clearTask()  {

  taskList.innerHTML = ' ';
  
  //Clear from LS

  clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}


// FILTER ITEMS
function filterTask(e) {

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task) {

    const item = task.firstChild.textContent; // senin verdiyin yazi li-nin icindeki

    if(item.toLowerCase().indexOf(text) != -1){    // This method returns -1 if the value to search for never occurs.
      task.style.display = 'block'; // показываешь task ->  li который подходи данному тексту
    }

    else{
      task.style.display = 'none';
    }
    

  });
  

}

