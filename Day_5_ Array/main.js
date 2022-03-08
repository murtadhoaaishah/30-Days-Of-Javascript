
// level 1

// import { countries } from "./countries";
console.log("countries");

// question 1
let Array = [];

// question 2
let number = [3, 4, 5, 7, 3, 8, 6, 5]

// question 3
console.log(number.length);

//question 4
console.log(number[0]); // first item
console.log(number[3]); // middle item
console.log(number[6]); // last item

//question 5
let mixedDataTypes = [3, true, 'asa', undefined]

//question 6
let itCompanies = ['Facebook', 'Google',
    'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//question 7
console.log(itCompanies);

//qustion 8
console.log(itCompanies.length);

//questnion 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//question 10
console.log('Numbers:', number)

// question 11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())


//question 12
console.log(itCompanies.join(', ').concat(' are big IT companies'))

//question 13
let companyIndex = itCompanies.indexOf('plenty waka')
companyIndex == -1
    ? console.log('Company not found')
    : console.log(itCompanies[companyIndex])

//question 14
console.log(itCompanies.includes('oo'));

//question 15
console.log(itCompanies.sort());

// question 16
console.log(itCompanies.reverse());

//question 17
console.log(itCompanies.slice(0, 3))

//question 18
console.log(itCompanies.slice(4, 7))

//question 19
console.log(itCompanies.splice(2, 3))

//question 20
// console.log(itCompanies);
console.log(itCompanies.slice(1, 3));

// question 21
console.log(itCompanies.slice(2, 3));

// level 2
//question 1
// console.log(countries)


//question 2
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(' ').length)

//question 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart.pop('Honey'));
console.log(shoppingCart.push('Sugar'));
shoppingCart[3] = 'Green Tea'

// question 4
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let countryIndex = countries.indexOf('ETHIOPIA')
// countryIndex !== -1
//     ? console.log(countries[countryIndex])
//     : console.log(countries.push('ETHIOPIA'));
// console.log(countries);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
//question 5
let webtechIndex = webTechs.indexOf('sass')
webtechIndex !== -1
    ? console.log('Sass is a CSS preprocess')
    : console.log(webTechs.unshift('sass'));
console.log(webTechs);

//qestion 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// level 3
//question 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortAge = ages.sort()

const minAge = sortAge[0]
const maxAge = sortAge[9]
console.log(minAge);
console.log(maxAge);

const medianAge = (sortAge[5] + sortAge[4]) / 2
console.log(medianAge);

let numerator = ages.reduce((acc, cur) =>
    acc + cur, 0)
let average = numerator / ages.length
console.log(average);

const range = maxAge - minAge
console.log(range);

//question 2
let countryLength = (countries.length)
let confirmMiddleCountry = countryLength % 2
let middleCountry = ((countryLength + 1) / 2) - 1
let secondMiddleCountry = middleCountry + 1
confirmMiddleCountry == 1
    ? console.log(countries[middleCountry])
    : console.log(countries[middleCountry], countries[secondMiddleCountry]);
