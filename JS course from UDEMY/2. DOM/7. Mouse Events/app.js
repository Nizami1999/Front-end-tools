const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Mousedown -- click and hold
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup -- click and hold opposite
// clearBtn.addEventListener('mouseup', runEvent);


// mouseover and mouseout - работает вокруг данного элемента и при наведении мышкой на другой элемент будет меняться в отличии от mouseenter and mouseleave! MAIN DIFFERENCE!!!

// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);


// Mousemove - просто движения вокруг окна будут фиксироваться
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; 
  
  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

}