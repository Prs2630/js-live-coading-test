//  Q1 Write an arrow function that expects an array of integers, and returns the sum of the elements of the array. 
// Use the built-in method reduce on the array argument
const sum = [4,7,8, 3].reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum); // 6