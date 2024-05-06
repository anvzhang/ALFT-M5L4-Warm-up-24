let vegetables = ["squash", "broccoli", "carrots", "celery"];

let vegetable = "cabbage";
vegetables.unshift(vegetable);

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

let produce = vegetables.concat(fruits);
console.log([...produce])

produce.sort();
console.log([...produce])

produce.reverse();
console.log([...produce])

let produceString = produce.join("; ");
console.log(produceString);





/* DO NOT CHANGE BEYOND THIS LINE */

const body = document.querySelector('body');
const vegetablesString = vegetables.join(", ");
body.insertAdjacentHTML('beforeend', vegetablesString);