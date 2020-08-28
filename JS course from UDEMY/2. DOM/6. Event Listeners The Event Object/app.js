let clear = document.querySelector('.clear-tasks');
clear.addEventListener('click', onClick);

function onClick(e) {
  // console.log(true);

  e.preventDefault(); // не дает перейти на линк на ссылку !
  
  let val = e;

  //Event target Element

  val = e.target;
  val = e.target.id;
  val = e.target.className;

  e.target.innerText = 'Hello';


  //Event type
  
  val = e.type 

  // Coords event relative to the window

  val = e.clientY;  // similar with X -horizontal 
  console.log(val);

  // Coords event relative to the element
  val = e.offsetY;
  console.log(val);
  

  
}