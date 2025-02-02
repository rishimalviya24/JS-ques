// const people = [
//     {
//         name:'Laptop',
//         age :"17"
//     },{
//         name:'Phone',
//         age:'18'
//     }
// ]

// const product = people.filter(person=> person.age >=18);

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 }
//   ];
//   const increaseFactor = 1 + 10 / 100;
//   const updatedProducts = products.map(p => ({
//      ...p, price: p.price * increaseFactor
//      }));
//   console.log(updatedProducts);

// const numbers = [2, 4, 6, 8];
// const multipliedNumbers = numbers.map(num => num * 3);
// console.log(multipliedNumbers);


// const words1 = ["hello", "world", "javascript"];
// const upperCaseWords = words1.map(words => words.toUpperCase());
// console.log(upperCaseWords);

// const numbers = [1, 2, 3, 4];
// const sqNumbers = numbers.map(num => num*num);
// console.log(sqNumbers);


// const names = ["John", "Mike", "Sam"]
// const preFixedNumbers = names.map(name => (`Mr.${name}`));
// console.log(preFixedNumbers);

// const students = [
//     { name: "Alice", marks: 80 },
//     { name: "Bob", marks: 75 },
//   ];
// const updatedMarks = students.map((student) =>student.marks+5)
// console.log(updatedMarks);


// const numbers = [1, 2, 3, 4];
// const stringNumbers = numbers.map((number) => number.toString());
// console.log(stringNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const evenOddFlags = numbers.map(num => num%2==0);
// console.log(evenOddFlags);

// const words = ["apple", "banana", "cherry"];
// const capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(capitalizeWords);

// const celsiusTemps = [0, 20, 30, 40];
// const fahrenheitTemps =  celsiusTemps.map(temp => (temp*9/5)+32);
// console.log(fahrenheitTemps); 

// FILTER ------

// const nums = [10,20,30,40]
// const greaterThanTen = nums.filter (num => num > 10 );
// console.log(greaterThanTen);

// const words = ["car", "bicycle", "bus", "train"];
// const longWords = words.filter(word => word.length > 4);
// console.log(longWords);

// const peoples = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 15 },
//   ];
// const adults = peoples.filter(people => people.age > 18);
// console.log(adults);

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num%2 0= 0);
// console.log(evenNumbers);

// const products = [
//     { name: "Notebook", price: 30 },
//     { name: "Bag", price: 100 },
//     { name: "Pen", price: 10 }
//   ];
// const affordablePrice = products.filter(product => product.price < 50);
// console.log(affordablePrice);
  
// const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// const validEmail = emails.filter(email => email.includes('@'));
// console.log(validEmail);

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isPrime = num => {
//     if (num <= 1 ) return false
// for (let i =2 ; i<= Math.sqrt(num);i++){
//     if(num % i === 0) return false}
// return true;
// }
// const primeNumbers = numbers.filter(isPrime);

// 100 ques =----------------

// question-1
// const name = 'rishi';
// const favHobby = 'learning'

// console.log(`my name is ${name} & my fav hobby is ${favHobby}`);

// question-2
// const result = 45*2-10
// console.log(result)

// question -3
// const year = new Date().getFullYear();
// console.log(year);

// question - 4
// const firstName = 'John'
// const lastName = 'Doe'
// console.log(firstName+ " " +  lastName)
// console.log(`${firstName} ${lastName}`)

// question - 5
// let num  = 10;
// console.log(num)
//  num = 13;
//  console.log(num);
 
// question -6 
// console.error(`This is a simulated error`);

// question-7
// const num = 12;
// const square = Math.pow(num,2)
// console.log(square);

// const isAdmin = false
// console.log(typeof isAdmin);

// const age = 18
// if(age >= 18){
//     console.log("you are an adult");
//  } else{
//         console.log('this is not an adult');    
//     }
    
// console.log(100/0);

// const PI = 3.14;
// console.log(PI);

// console.log(typeof null);

// const num = 12
// const str = 'rishi'
// const isAdmin = true
// console.log(`num: ${num} str: ${str} isAdmin: ${isAdmin}`);

// let num;
// console.log(name);
// console.log(typeof num);

// let name = undefined;
// console.log(name);
// console.log(typeof name);

// const n = 12
// for(let i = 0; i < n; i++){
//     console.log(i);
// }

// let sum = 0;
// let i = 1;
// while(i<=10){
//     sum +=i;
//     i++;
// }
// console.log(sum);

// const str = 'JavaScript';
// for (const char of str){
//  console.log(char);
// }
