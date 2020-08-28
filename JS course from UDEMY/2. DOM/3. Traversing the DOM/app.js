let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes ( даёт все пункты [включая пропуски комменты и тд])
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes (чаще будем пользоваться этим так как он берет только элементы child)
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';


// Children of Children
val = list.children[3].children[0].id = 'test-link';

console.log('===========================');

// let forid = list.children[3].children[0];   // check of id 
// console.log(forid);

val = list.firstChild // Node 
val = list.firstElementChild // 1-st Element   // Similar with Last 
// val = list.children[0] // the same like Element


// Count
val = list.childElementCount;


// ОБРАТНО К РОДИТЕЛЮ

val = listItem.parentElement;  // почти всегда одинаковые с Node
val = listItem.parentNode;

// родитель родителя
 val = listItem.parentElement.parentElement.parentElement.parentElement; // and so on... 


// next sibling
val = listItem.nextSibling; // for Node
val = listItem.nextElementSibling; // for Element  // следующий элемент после него 
val = listItem.previousElementSibling // но нету пред элемента - null




 

console.log(val);







