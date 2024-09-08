"usestrict";
//variables and Data types

//chllaenge 1
// const input = function (x, y) {
//   return x + y;
// };
// const result = input(10, 6);
// console.log(result);

// //challenge 2
// let array = [122, 21, 10, 500, 23, 87];
// let num = array[0];
// for (let i = 1; i < array.length; i++) {
//   // in this loope why we start the second number in array?
//   if (array[i] > num) {
//     num = array[i];
//   }
// }
// console.log(num); //output:?

//functions

//chllenge 3
// const arrow = (name) => name.toLocaleUpperCase();
// console.log(arrow("hosseinkarimi"));
// //challenge 4
// const numbers = [99, 3, 6, 8, 10, 77];
// const fun = numbers.filter((number) => number % 2 !== 0);
// console.log(fun);

//Loops and Conditionals
//challenge 1

// const loope = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < loope.length; i++) {
//   console.log(loope[i]);
// }

//challenge 2
function isprime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isprime(8), isprime(7));
function thisprime(prime){
//   If num is less than or equal to 1, the function returns false because numbers less than or equal to 1 are not prime.
// If num is exactly 2, the function returns true because 2 is the smallest and only even prime number.
  if(prime<=1)
}
//chllenge 3
//challenge 4
//chllenge 5
//Advanced challenges.
