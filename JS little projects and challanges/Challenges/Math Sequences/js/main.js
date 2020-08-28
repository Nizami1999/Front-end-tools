function mathSequences(arr) { // arr - is just parameter!

    let arith = new Set();  // only one is seen
    let geo = new Set(); // only one is seen

    for(let i = 1; i < arr.length; i++) {

        let number1 = arr[i] - arr[i-1];
        arith.add(number1); // push для array , add для set

        let number2 = arr[i] / arr[i-1]; 
        geo.add(number2); // push для array , add для set

    }

    if(arith.size === 1)   {
        return "Arithmetic";
    } 
    
    if(geo.size === 1)   {
        return "Geometric";
    }

    return "Neither arithmetic nor geometric";

    console.log(arith); // после надписей не играют роль
    console.log(geo); // после надписей не играют роль
    


}

let array0 = [2, 6, 1, 0];
let array1 = [2, 4, 6, 8];
let array2 = [3, 9, 27, 81];
let array3 = [2, 5, 14, 89];

console.log(mathSequences(array0));
console.log(mathSequences(array1));
console.log(mathSequences(array2));
console.log(mathSequences(array3));
