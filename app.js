"usestrict";
//100 javascript challenges, beginner to advanced

//beginner:

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

//chllenge 3
// const arrow = (name) => name.toLocaleUpperCase();
// console.log(arrow("hosseinkarimi"));
// //challenge 4
// const numbers = [99, 3, 6, 8, 10, 77];
// const fun = numbers.filter((number) => number % 2 !== 0);
// console.log(fun);

//challenge 5

// const loope = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < loope.length; i++) {
//   console.log(loope[i]);
// }

//challenge 6
// function isprime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isprime(8), isprime(7));

//chllenge 7,Create a function that converts minutes to seconds.
// function convert(minutes) {
//   return minutes * 60;
// }
// const output = convert(4);
// console.log(output);output??

//challenge 8, Write a function to reverse a string.

// function reverse(str) {
//   const reversestring = str.split("").reverse("").join("");
//   console.log(reversestring);
// }
// reverse("hello world");

//chllenge 9,	Create a function that returns the first element of an array.
// const array = [22, "ali", true, 10];
// function Firstelement() {
//   return array[0];
// }
// console.log(Firstelement());
//challenge 10, Create a function that checks if a string is a palindrome.
// function ispalindrome(str) {
//   // Convert to lowercase
//   str = str.toLowerCase();
//   //Remove non-alphanumeric characters
//   str.replace(/[^a-z0-9]/g, "");
//   //reverse yh string
//   const reversestr = str.split("").reverse("").join("");
//   // Check if the original string is equal to the reversed string
//   return str === reversestr;
// }
// const str1 = "madam";
// const str2 = "232";
// const str3 = "A man, a plan, a canal. Panama";
// const str4 = "hossein";
// console.log(ispalindrome(str1));
// console.log(ispalindrome(str2));
// console.log(ispalindrome(str3));
// console.log(ispalindrome(str4));
//challenge11, Write a function to count the number of vowels in a string.
// function getcount(string) {
//   let vowels = "aAeEiItoOuU";
//   let vowelscount = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.indexOf(string[i]) !== -1) {
//       vowelscount += 1;
//     }
//   }
//   return vowelscount;
// }
// console.log(getcount("hello im hossein and im a developer"));
// console.log(getcount("in this season we count vowels"));
//intermedate challenges:

//Advanced challenges:
