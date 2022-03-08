//question 1
let firstName = 'teyayeye';
let lastName = 'atawewe';
let country = 'nigeria';
let city = 'ikorodu';
let age = 15;
let isMarried = true;

console.log(typeof 'teyayeye');
console.log(typeof 'atawewe');
console.log(typeof 'nigeria');
console.log(typeof 'ikorodu');
console.log(typeof 15);
console.log(typeof true);

//question 2
console.log('10' === 10);

//question 3
console.log('9.8' === 10);

//question 4
console.log(5 > 3 && 6 < 12);
console.log(4 > 8 || 3 < 5);
console.log('3' === 3 || !(5 === '5'));

console.log(4 >= 3 && 4 < 3);
console.log(!(6 > 2) && !(5 > 6));

//question 5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 !== '4'); // true
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// let a = 'python';
// let b = 'jargon';
console.log('python'.length !== 'jargon'.length);

//question
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // false
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// question 7
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getTime());

//Level 2
//question 1
// let base = prompt('Enter base: ');
// let height = prompt('Enter height: ');
// console.log(alert(`The area of the rectangle is ${Number(base) * Number(height)}`));

//question 2
// let a = prompt('Enter side a: ');
// let b = prompt('Enter side b: ');
// let c = prompt('Enter side c: ');
// console.log(alert(`The perimeter of the rectangle is ${Number(a) + Number(b) + Number(c)}`));

// //question 3
// let length = prompt('Enter base: ');
// let width = prompt('Enter width: ');
// console.log(alert(`The area of the rectangle is  ${Number(length)}  * ${Number(width)} and perimeter is ${2 * Number(length) + Number(width)}`));

// question 4
// const pi = 3.14
// let r = promp('Eenter a value for radius')
// const circumference = 2 * pi * Number(r) * (r)
// const area = pi * Number(r) * (r)
// console.log(area)
// console.log(circumfrerence)

//question 5
let x1 = 2; let y1 = 2 * 2 - 2;
let x2 = 3; let y2 = 2 * 1 - 2;

const slope1 = (y1 - y2) / (x1 - x2);
console.log(slope1);

//question 6
let p1 = 2; let q1 = 2;
let p2 = 6; let q2 = 0; 1

const slope2 = (y1 - y2) / (x1 - x2);
console.log(slope2);


//question 7
console.log(slope1 === slope2)

//question 8
let m1 = 2; let n1 = 2 ** 2 + 6 * 2 + 9
let m2 = 3; let n2 = 3 ** 2 + 6 * 3 + 9
console.log(n1)
console.log(m1)

//question 9
// let hours = prompt('Enter hours: ');
// let ratePerHour = prompt('Enter rate per hour : $');
// const income = Number(hours) * Number(ratePerHour);
// console.log(alert(`Your weekly earning is $${income}`));

// question 10
// let name = (prompt('Enter your name:'));
// length.name === 7
//     ? console.log(alert('your name is long'))
//     : console.log(alert('your name is short'));

//question 11
// let firstName1 = prompt('Enter First name: ');
// let familyName = prompt('Enter Family name per hour : $');
// firstName1.length >= familyName.length
//     ? console.log(alert(`Your first name is greater than family name`))
//     : console.log(alert(`Your family name is greater than first name`));

//question 12
// let myAge = 250
// let yourAge = 25
// console.log(alert(`I am ${myAge - yourAge} years older than you.`));

//question 13
// let birthYear = prompt('Enter birth year');
// let getFullYear = new Date().getFullYear()
// getFullYear - birthYear >= 18
//     ? console.log(alert(`You are ${getFullYear - Number(birthYear)}. You are old enough to drive`))
//     : console.log(alert(`You are ${getFullYear - Number(birthYear)}. You will be allowd to drive after ${18 - (getFullYear - Number(birthYear))} years `))

// question 14
// let yearsLived = prompt('Enter number of years you live: ');

// question 15
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes()
console.log(`${year} - ${month} - ${date}  ${hours}:${minutes}`);
console.log(`${date} - ${month} - ${year}  ${hours}:${minutes}`);
console.log(`${date} - ${month} - ${year}  ${hours}:${minutes}`);

// level 3
console.log(`${year} - ${month} - ${date}  ${hours - 12}:${minutes}`);

