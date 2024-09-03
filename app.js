"usestrict";
//variables and Data types

//chllaenge 1
const input = function (x, y) {
  return x + y;
};
const result = input(10, 6);
console.log(result);

//challenge 2
let array = [122, 21, 10, 500, 23, 87];
let num = array[0];
for (let i = 1; i < array.length; i++) {
  // in this loope why we start the second number in array?
  if (array[i] > num) {
    num = array[i];
  }
}
console.log(num); //output:?

//functions

//chllenge 3
const arrow = (name) => name.toLocaleUpperCase();
console.log(arrow("hosseinkarimi"));
//challenge 4
//Moderate challenges.
//challenge 2
//chllenge 3
//challenge 4
//chllenge 5
//Advanced challenges.
