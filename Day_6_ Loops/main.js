//   const txt = '%I a%m te%%a%%che%r%$# a%n%d %% I l%o%ve te%ach%ing.\
//   T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
//   p%e%o%ple.\
//   I fo%und te%a%ching m$#%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
//   D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
// const pattern = txt.replace(/%/g, '')
// console.log(pattern);


//level1
//question 1 
for (let i = 1; i <= 7; i++) {
  console.log(i)
}

//question 2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// question 3
let n = 7
for (let i = 0; i <= n; i++) {
  console.log(i);
}

//question 4
let ash = '#'

for (let i = 0; i <= 7; i++) {
  console.log(ash.repeat(i));

}


// //question 5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}

//question 6
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

//question 7
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// //question 8
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) console.log(i);
}

//question 11 PrimeNumber

// //question 10
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum = sum + i
}
console.log(`sum of all numers from 0 to 100 is ${sum}`);

//question 11
let evenNumber = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0)
    evenNumber = evenNumber + i
}
let oddNumber = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0)
    oddNumber = oddNumber + i
}
console.log(`The sum of all evens from 0 to 100 is ${evenNumber}. And the sum of all odds from 0 to 100 is ${oddNumber}.`);

//question 12
// let newArray = []
// let even = 0
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0)
//     even = even + i
// }
// newArray.push(even)
// let odd = 0
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1)
//     odd = odd + i
// }

// newArray.push(odd)
// console.log(newArray);

//question 13
let array = []

for (let i = 0; i <= 5; i++) {
  let randNum = Math.floor((Math.random() * 10))
  array.push(randNum)
}
console.log(array)

//question 14 unsolved
// let no = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let anotherArray = []
for (let i = 0; i < 5; i++) {
  numGen = Math.floor(Math.random() * 10)
  anotherArray.includes(numGen) ? null : anotherArray.push(numGen)
}
console.log(anotherArray);


//question 15
let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
let outcome = ""
for (let i = 0; i <= 5; i++) {
  outcome += char.charAt(Math.floor(Math.random() * char.length))
}
console.log(outcome);
// console.log(Math.random().toString(36).substring(2, 8))


//level 2
//question 1
let idGen = 'abcdefghijklmnopqrstuvwxyz0123456789'
let id = ''
for (let i = 0; i <= 20; i++) {
  id += idGen.charAt(Math.floor(Math.random() * idGen.length))
}
console.log(id);


//question 2
let hexaGen = 'abcdefghijklmnopqrstuvwxyz0123456789'
let hexaNum = ''
for (let i = 0; i <= 5; i++) {
  hexaNum += hexaGen.charAt(Math.floor(Math.random() * hexaGen.length))
}
console.log(`#${hexaNum}`);


//qustion 3
let colour1 = Math.floor(Math.random() * 256)
let colour2 = Math.floor(Math.random() * 256)
let colour3 = Math.floor(Math.random() * 256)
console.log(`rgb(${colour1}, ${colour2}, ${colour3})`);


//question 4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let countryArray = []
for (let i = 0; i < countries.length; i++) {
  countryArray.push(countries[i].toUpperCase())
}
console.log(countryArray)

//question 5
let countryLengthArray = []
for (let i = 0; i < countries.length; i++) {
  countryLengthArray.push(countries[i].length)
}
console.log(countryLengthArray);

//question 6
let countryArrayOfArray = []
let arrayOfCountryName = []

for (i = 0; i < countries.length; i++) {
  countryFirstThreeLetter = countries[i].slice(0, 3).toUpperCase()
  arrayOfCountryName.push([countries[i], countryFirstThreeLetter, countries[i].length])
}
countryArrayOfArray.push([arrayOfCountryName])
console.log(countryArrayOfArray);


// question 7
let landCountries = ['Finland', 'Ireland', 'Iceland']
landCountryArray = []
landCountries.forEach(landCountry => {
  if (landCountry.includes('land')) {
    landCountryArray.push(landCountry)
  } else {
    console.log('All these countries are without land')
  }
}
)
console.log(landCountryArray)

//question 8
let iaCountries = ['Albania', 'Bolivia', 'Ethiopia']
iaCountryArray = []
iaCountries.forEach(iaCountry => {
  if (iaCountry.endsWith('ia')) {
    iaCountryArray.push(iaCountry)
  } else {
    console.log('These countries end without ia')
  }
}
)
console.log(iaCountryArray)

//question 9
let firstCountry = 'Albania'
for (let i = 0; i < countries.length; i++) {
  countries[i].length > firstCountry.length
    ? firstCountry = countries[i]
    : firstCountry
}
console.log(firstCountry);

//question 10
let twoCountries = ['Japan', 'Kenya']
twoCountries.forEach(twoCountry => {
  if (twoCountry.length == 5)
    console.log(twoCountry)
}
)

//qestion 11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]



let firstValue = webTechs[0];
for (let i = 0; i < webTechs.length; i++) {
  webTechs[i].length > firstValue.length
    ? firstValue = webTechs[i]
    : firstValue
}
console.log(firstValue)

//qeustion 12
let arrayOfWebTechs = []
let webtechsArrayOfArray = []
for (let i = 0; i < array.length; i++) {
  webtechsLength = webTechs[i].length
  arrayOfWebTechs.push([webTechs[i], webtechsLength])
}
webtechsArrayOfArray.push(arrayOfWebTechs)
console.log(webtechsArrayOfArray);

//question 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i < mernStack.length; i++) {
  firstLetter = mernStack[i].slice(0, 1)
  // acronym = firstLetter.join('')
  // console.log(acronym);
}

//question 14
let fullStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const stack of fullStack) {
  console.log(stack);
}

//question 15
arrayOfFruits = []
let fruits = ['banana', 'orange', 'mango', 'lemon']
for (let i = fruits.length; i >= 0; i--) {
  arrayOfFruits.push(fruits[i])
}
console.log(arrayOfFruits);


//questiom 16
let firstArray = []
let secondArray = []
let arrayOfArray = []
for (let i = 0; i < fullStack.length; i++) {
  console.log(fullStack[i]);
}
firstArray.push(fullStack.slice(0, 4))
secondArray.push(fullStack.slice(4, 7))
arrayOfArray.push(firstArray, secondArray)
console.log(arrayOfArray);

//level 3
//question 1
let copiedCountries = [...countries]

//question 2
let sortedCountries = copiedCountries.sort()
console.log(sortedCountries);

//queston 3
let sortedCountriesWebtechs = webTechs.sort()
console.log(sortedCountriesWebtechs);

let sortedMernstack = mernStack.sort()
console.log(sortedMernstack);

//question 4
let landCountriesArray = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land'))
    landCountriesArray.push(countries[i])

}
console.log(landCountriesArray);

//question 5
let firstCountryValue = 'Bolivia'
for (let i = 0; i < countries.length; i++) {
  countries[i].length > firstCountryValue
    ? country[i] = firstCountryValue
    : firstCountryValue
}
console.log(firstCountryValue);

// question 6
let landlandCountriesArray = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land'))
    landlandCountriesArray.push(countries[i])

}
console.log(landlandCountriesArray);

//question 7
let fourCharacterCountriesArray = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 4)
    fourCharacterCountriesArray.push(countries[i])
}
console.log(fourCharacterCountriesArray);

//question 9

//question 8
let reversedCountry = []
for (let i = 0; i < countries.length; i++) {
  reversedCountry.push(countries[i].toUpperCase())
}
console.log(reversedCountry.reverse());

