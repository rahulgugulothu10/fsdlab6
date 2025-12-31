//1.Double the values of each element && >20 filter the doubled values
const arr=[3,5,7,1,8]
const dbval=arr.map((n)=>n*n)
console.log("original array:",dbval)
console.log(dbval)
const cmval=dbval.filter((n)=>n>20)
console.log("original array:",cmval)
console.log(cmval)

// //2.Sum of each elements in given array
// const arr1=[1,3,5,7,9]
// const sum=arr1.reduce((acc,cur)=>acc+cur,0)
// console.log("original array is:",arr1)
// console.log("sum of each element in an array:",sum)
// //3.to filter even numbers 
// const arr2=[1,2,3,4,5,6,7,8,9]
// const evenNum=arr2.filter((n)=>n%2==0)
// console.log("even numbers are:",evenNum)
// //4.to check given string is palindrome or not
// let str="sir"
// let s1="mom"
// let isPal=str=>str==str.split("").reverse().join("")
// console.log(`is "${str}" not a plaindrome:`+isPal(str))
// console.log(`is "${s1}"  a palindrome:`+isPal(s1))

// //5.to count vowels in a string using arrow function
// const countVowels = (str) => {
//   const vowels = "aeiouAEIOU";
//   return str.split('').filter(char => vowels.includes(char)).length;
// };
// const text = "Rahul";
// console.log(`Number of vowels: ${countVowels(text)}`);


// //6.1. Array Destructuring
// const colors = ['red', 'green', 'blue'];
// const [firstColor, secondColor] = colors;
// console.log(firstColor, secondColor); 

//    // 2. Object Destructuring
// const user = { name: 'Alice', age: 25, city: 'New York' };
// const { name, age } = user;
// console.log(name, age); 

//     // 3. Destructuring with Renaming

// const { city: location } = user;
// console.log(location); // Output: New York

//     // 4. Destructuring with Functions

// function displayUser({ name, age }) {
//     console.log(`User: ${name}, Age: ${age}`);
// }
// displayUser(user); 

//      // 5. Destructuring with Rest Operator (...)

// const numbers = [10, 20, 30, 40, 50];
// const [firstNum, ...remainingNums] = numbers;

// console.log(firstNum);      
// console.log(remainingNums); 

//     // Also works with objects
// const { name: userName, ...otherDetails } = user;
// console.log(otherDetails); 


// //7.sum of squared odd numbers in an array
// let odd=arr2.filter((n)=>n%2!=0)
// let dubod=odd.map((n)=>n*n)
// let sumOdd=dubod.reduce((acc,cur)=>acc+cur,0)
// console.log("sum of double odd values:",sumOdd)

// //