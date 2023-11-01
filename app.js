
// const DoSomething = (a, b) => {
// 	return a + b
// }

// console.log(DoSomething(12, 12))

// if ('some string' === 'another string') {
// 	console.log('the strings are equal')
// }else {
// 	console.log('the strings are not equal')
// }

// for (let i = 0; i < 100; i++) {
// 	let i = 'danilo';
// 	console.log(i)
// }

// const arr = ['Danilo','Jaycel', 'Vince', 'Mike', 'chano', 20, 23, 24, 50, 3, 3, true, false, ];

// for (let i = 0; i < arr.length; i++) {

// 	if (arr[i] === 'a') {
// 		console.log(arr[i]);
// 	}

// }

// function myFunction() {
// 	return "hello world"
// }

// console.log(myFunction())

// const arr1 = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > 2) {
//         console.log(arr1[i]);
//     }
// }

// let account = 100;
// let lunch = 20;
// let dinner = 50;
// let earned = 200;

// let totalMoneyLeft = account - (lunch + dinner) + earned;
 
// console.log('$' + totalMoneyLeft);
// 2095 + 799 + 1899

//  let totalCost = Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100 + (2095 + 799 + 1899 + 499) / 100



//  let hello = `items (${1 + 1}): $${(2095 + 799) / 100}`

//  console.log(hello

// let name = 'Danilo Pelaso Jr.'

// let message = `My name is ${name}`;
// let age = 10.5;
// let isBoolean = true;

// let person = {
//     name: 'Danilo Pelaso',
//     age : '22'
// };

// let names = ['Danilo', 'Jaycel', 'Vince'];

// let add = function (a, b) {
//     return a * b;
// }

// const add = (a, b) => a + b;

// let x = 5;
// let y = '5';


// let isGreater = x === y;

// let grade = 74;

// if (grades >= 90) {
//     mark = 'A';
// }else if (grades >= 80) {
//     mark = 'B';
// }else if (grades >= 75) {
//     mark = "C";
// } else {
//     mark = 'F';
// }

// const finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 75 ? "C" : 'F';

// const names = ['jaycel', 'vince', 'Mike'];
// const [firstPerson, secondPerson, thirdPerson] = names;

// const person = {
//     name: 'Danilo Pelaso',
//     age: 21,
//     birthdate: new Date(),
//     status: 'Single'
// };

// const {name, age, birthdate, status} = person;

// ***Spread Operator***

// const number = [1, 2, 3, 4, 5];
// const completeNumber = [...number, 6, 7, 8, 9]



// console.log(completeNumber);

//Array Methods
//Push Methods

// let names = ['Danilo', 'Jaycel', 'Vince'];
// names.push('Mike');

//Pop Method

// let names = ['Danilo', 'Jaycel', 'Vince', 'mike'];

// names.pop();

//splice method
// let names = ['Danilo', 'Jaycel', 'Vince', 'jek', 'yab'];


// console.log(names.slice(2));


// let students = [
//     {
//         id: 1,
//         f_name: 'Danilo',
//         l_name: 'Pelaso',
//         gender: 'M',
//         course: 'BSIT'
//     },
//     {
//         id: 2,
//         f_name: 'Jaycel',
//         l_name: 'Montes',
//         gender: 'F',
//         course: 'BSN'
//     },
//     {
//         id:3,
//         f_name: 'Jerico',
//         l_name: 'Bedoya',
//         gender: 'M',
//         course: 'BSCS'
//     }
// ];

// ***Map Iterator

// const newStudents = students.map((student, index) => {
//     return student;
// });


//Filter Method
// const filteredStudents = students.filter((student, index) => student.gender === "M");

// const x = 2;

// setTimeout(function(){
//     console.log('hello world');
// },5000)

// console.log(x);

// const button = document.querySelector('.btn')

// button.addEventListener('click', ()  => {
//     console.log('button clicked');
// }); 

// const arrayFruits = ['🍌', '🍎', '🍇']

// const myString = 'This is the first line\"\\n\"';

// const myString = `My salary per day as part timer is ${76 * 6} Pesos`

// console.log(myString)

// let theNumber = Number(prompt("Pick a number"));
// if (theNumber === 0) {
//     console.log('the number you entered is zero');
// } else if (!Number.isNaN(theNumber)) {
//     console.log(`Your Number is the squaroot of ${theNumber * theNumber}`);
// } else {
//     console.log('The Number is you entered is not valid')
// } 


// for (let number = 0; number <= 20; number = number + 2) {
//     console.log(number);
// }
// let result = 1;
// for (let i = 0; i < 10; i++) {
//     result *= 2;
// }

// console.log(result);
let cartQuantity = 0;



let cost = ((1 * 5) + (2 * 3) + (1 * 9));
let taxCharge = cost * 0.10;

console.log(`Tax (10%): $${taxCharge}`);




 