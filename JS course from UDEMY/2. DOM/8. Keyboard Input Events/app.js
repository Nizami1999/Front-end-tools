const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');


taskInput.value = ''; // clear the value of input 

// form.addEventListener('submit', runEvent);

//Keydown 
// taskInput.addEventListener('keydown', runEvent);

//Keyup - meslehetdidi bunu istifade elemek 
// taskInput.addEventListener('keyup', runEvent);

//Keypress - meslehetdidi bunu istifade elemek too
// taskInput.addEventListener('keyup', runEvent);

//Focus - просто нажми на input и он сработает 
// taskInput.addEventListener('focus', runEvent);

// Blur - opposite of focus нажми на input а потом за его пределы и он сработает 
// taskInput.addEventListener('blur', runEvent);

// cut - ctrl + x
// taskInput.addEventListener('cut', runEvent);

// paste - ctrl + v
// taskInput.addEventListener('paste', runEvent);

// input -> всё что сделаешь то есть изменишь как то обрежешь вставишь и тд. то функция сработает
// taskInput.addEventListener('input', runEvent);

// change -> например с тегом <option value = 1 ></value>... при изменении номера!
// taskInput.addEventListener('change', runEvent);

function runEvent(e) {

  console.log(`Event Type: ${e.type}`);
  // console.log(e.target.value);

  heading.innerText = e.target.value;

  // e.preventDefault();
}