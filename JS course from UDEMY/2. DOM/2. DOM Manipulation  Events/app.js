// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';

let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);  // the same with previous one

// Convert HTML collection into array 



listItems = Array.from(listItems);
listItems.reverse();
console.log(listItems);

listItems.forEach(function(li) {  // li - is just parameter.
  console.log(li);
})


console.log('====================================');

//querySelectorAll // автомотически переводит его в NodeList (array)

const items1 = document.querySelectorAll('.collection-item');

items1.forEach(function(i) {
  console.log(i);
})