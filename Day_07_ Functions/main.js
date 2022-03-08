// level 1
//Exercise 1
function fullName() {
  let fullName = 'Murtadho \'Aaishah'
  console.log(fullName);
}
fullName()

//question 2
function full_Name() {
  let firstName = '\'Aaishah'
  let lastName = 'Murtadho'
  let full_Name = firstName.concat(lastName)
  console.log(full_Name);
}
full_Name()

//question 3   
function addNumber(a, b) {
  let sum = a + b
  console.log(sum);
}
addNumber(2, 3)


//question 4
function areaOfNumber(length, width) {
  let area = length * width
  console.log(area);
}
areaOfNumber(4, 3)

//question 5
function perimeterOfRectangle(length, width) {
  perimeter = 2 * (length + width)
  console.log(perimeter);
}
perimeterOfRectangle(3, 2)

//question 6
function volumeOfRectPrism(length, width, height) {
  volume = length * width * height
  console.log(volume);
}
volumeOfRectPrism(3, 3, 5)

//question 7
function areaOfCircle(r) {
  area = Math.PI * r * r
  console.log(area);
}
areaOfCircle(5)

//question 8
function circumOfCircle() {
  let r = 5
  circumference = 2 * Math.PI * r
  return circumference
}
console.log(circumOfCircle())

//question 9
const densityOfObject = (mass, volume) => {
  density = mass / volume
  return density
}
console.log(densityOfObject(6, 4));

//question 10
const speedOfObject = (distance = 8, time = 3) => {
  speed = distance / time
  return speed
}
console.log(speedOfObject());

//question 11
const weightOfObject = () => {
  let mass = 42
  let gravity = 7
  weight = mass * gravity
  return weight
}
console.log(weightOfObject())

//question 12
const temperature = function (oC) {
  const oF = (oC * 9 / 5) + 32
  return oF
}
console.log(temperature(35));

//question 13
const BMI = function (weight, height) {
  const bmi = weight / (height * height)
  if (bmi < 18.5) {
    console.log('Underweight')
  } else if (bmi >= 18.5 && BMI <= 24.9) {
    console.log('Normal weight')
  } else if (bmi <= 29.9 && BMI >= 25) {
    console.log('Overweight')
  } else {
    console.log('Obese');
  }
  return bmi
}
console.log(BMI(25000, 10));

//question 14
const checkSeason = function (month) {
  if (month == 'september' || 'october' || 'november') {
    console.log('The season is Autumn')
  } else if (month == 'december' || 'january' || 'february') {
    console.log('The season is Winter')
  } else if (month == 'march' || 'april' || 'may') {
    console.log('The season is spring')
  } else { console.log('The season is summer') }
}
console.log(checkSeason('july'));

//question 15
let biggestArg = 0
const findMax = (...args) => {
  for (const element of args) {
    element > biggestArg
      ? biggestArg = element
      : biggestArg
  }
  return biggestArg
}
console.log(findMax(0, -10, -2))
console.log(findMax(0, 12, 10, 5));

//level 2
//question 1
const solveLinEquation = (a, b, c, x) => {
  //a * x + b * y + c == 0 equation for a linear equation
  y = -(a * x + c) / b
  return y
}
console.log(solveLinEquation(5, -2, 3, 4));

//question 2
const solveQuadEquation = (a, b, c) => {
  //  ax2 + bx + c = 0 quadratic equation
  x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a //almighty formula
  x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a
  return { x1, x2 }
}
console.log(solveQuadEquation(2, 5, 2));

//question 3
const printArray = (...args) => {
  newArray = []
  for (const element of args) {
    newArray.push(element)
  }
  return newArray
}
console.log(printArray(4, 'dog', 'banana', 5, 6))

//question 4
function showDate() {
  now = new Date()
  year = now.getFullYear()
  month = now.getMonth()
  day = now.getDate()
  hour = now.getHours()
  mins = now.getMinutes()
  date = console.log(`${day}/${month}/${year} ${hour}:${mins}`);
  return date
}
console.log(showDate());

//question 5
//question 6
function reverseArray() {
  for (const array of arguments) {
    reversed = array.reverse()
  }
  return reversed
}
console.log(reverseArray([4, 7, 5, 'banana']));

//question 7
function capitalizeArray() {
  array = []
  for (const items of arguments) {
    array.push(items.toUpperCase())
  }
  return array
}
console.log(capitalizeArray('balm', 'orange', 'apple', 'bottle'));

//question 8
function addItem() {
  addItemArray = []
  for (let i = 0; i < arguments.length; i++) {
    addItemArray.push(arguments[i])
  }
  return addItemArray
}
console.log(addItem(5, 6, 9));

//question 9
function removeItem() {
  removeItemArray = []
  for (let i = 0; i < arguments.length; i++) {
    removeItemArray.push(arguments[i])
  }
  return removeItemArray
}
console.log(removeItem(5, 6));

//question 10
function sumOfNumbers() {
  sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumOfNumbers(3, 7, 8, 9));

//question 11
function sumOfOdds() {
  sumOdds = 0
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) sumOdds += i;
  }
  return sumOdds
}
console.log(sumOfOdds());

//question 12
function sumOfEvens() {
  sumEvens = 0
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) sumEvens += i;
  }
  return sumEvens
}
console.log(sumOfEvens());

//question 13
function evensAndOdds() {
  let sumOddArray = []
  let sumEvenArray = []
  sumOdd = 0
  sumEven = 0
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) sumOddArray.push(i)
    if (i % 2 == 0) sumEvenArray.push(i)
    sumOdd = sumOddArray.length
    sumEven = sumEvenArray.length

  }
  console.log(`The number of odds are ${sumOdd}.
The number of evens are ${sumEven}.`);

}
evensAndOdds()


//question 14
function sumArguments() {
  sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumArguments(3, 6, 7));

//question 15
function userId() {
  params = ""
  parameters = '12.abcd098efG34HIJm7nopRSTUV56wxyz'
  for (let i = 0; i < 6; i++) {
    params += parameters.charAt(Math.floor(Math.random() * 33))
  }
  console.log(params);
}
userId()

//question 16


//question 17
function randomHexaNum() {
  hexaDec = "#"
  parameter = '12abcd098efG34HIJm7nopRSTUV56wxyz'
  for (let i = 0; i < 6; i++) {
    hexaDec += parameter.charAt(Math.floor(Math.random() * 33))
  }
  console.log(hexaDec);
}
randomHexaNum()

//question 18
function idGenerator() {
  id = ""
  parameter = '12abcd098efG34HIJm7nopRSTUV56wxyz'
  for (let i = 0; i < 7; i++) {
    id += parameter.charAt(Math.floor(Math.random() * 33))
  }
  console.log(id);
}
idGenerator()

//level 3
//question 1
// const userIdGeneator = () => {
userId = []
numOfIds = ""
parameter = '12abcd098efG34HIJm7nopRSTUV56wxyz'
// numberOfCharacters = prompt('Enter number of characters')
// numberOfIds = prompt('Enter number of Ids')
// for (let i = 0; i < numberOfCharacters; i++) {
// userId += parameter.charAt(Math.floor(Math.random() * 33))
// }
// for (let i = 0; i < numberOfIds; i++) {
// numOfIds.push(userId)
// console.log(numOfIds);
// }

// }
// userIdGeneator()

//question 2
function rgbColorGenerator() {
  color1 = Math.floor(Math.random() * 256)
  color2 = Math.floor(Math.random() * 256)
  color3 = Math.floor(Math.random() * 256)
  console.log(`rgb(${color1}, ${color2}, ${color3})`);
}
rgbColorGenerator()

//question 3
function arrayOfHexaColors() {
  let hexaDecColor = 0

  //  = "#"
  let parameter = '12abcd098efG34HIJm7nopRSTUV56wxyz'
  for (let i = 0; i < 6; i++) {
    hexaDecColor += parameter.charAt(Math.floor(Math.random()
      * 33))
  }
  return ['#' + hexaDecColor];
}
console.log(arrayOfHexaColors());

//function 4
function arrarOfRgbColors() {
  color1 = Math.floor(Math.random() * 256)
  color2 = Math.floor(Math.random() * 256)
  color3 = Math.floor(Math.random() * 256)
  console.log(`[rgb(${color1}, ${color2}, ${color3})]`);
}
arrarOfRgbColors()


//question 5
function hexaToRgb(num) {
  let hexa = num.toString(16)
  return hexa.length === 1 ? '0' + hexa : hexa
}
console.log(hexaToRgb(12));

//question 6
// function rgbToHexa(r, g, b) {
//   return '#' + rgbToHexa(r) + rgbToHexa(g) + rgbToHexa(b)
// }
// console.log(rgbToHexa(5, 3,));

//question 7
// function generateColors() {
//   let color = prompt('What color would you like to generate, hexa or rgb?')
//   if (color == 'rgb') {
//     let r = prompt('Enter value for r')
//     let g = prompt('Enter value for g')
//     let b = prompt('Enter value for b')
//     return rgbToHexa()
//   } else {
//     if (color == 'hexa') {
//       let r = prompt('Enter value for hexa')
//       return hexaToRgb()
//     }
//   }
// }
// console.log(generateColors());

//question 8
function shuffleArray(array) {
  let currentIndex = array.length;
  while (0 !== currentIndex) {
    random = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[random];
    array[random] = temporaryValue;
  }
  // console.log(array);
  return array;
}
let num = [8, 6, 9, 3, 6, 4]
console.log(shuffleArray(num));

//question 9 unsoled
function factorial(n) {
  /* return n === 1 || n === 0
    ? 0
    : (n * factorial(n - 1)) */
  return n <= 1 ? 1 : n * factorial(n - 1)
}
console.log(factorial(20));

//question10
function isEmpty(array) {
  return array.length == 0 ? true : false

}
let x = [5, 6, 9, 8, 10]
console.log(isEmpty(x));

// question 11
function sumOfArray(array) {
  let total = array.reduce((acc, cur) => acc + cur)
  return total
}
console.log(sumOfArray(x));

//question 12
function sumOfArray(array) {
  for (let i = 0; i <= array.length; i++)
    typeof array[i] == 'number'
      ? total = array.reduce((acc, cur) => acc + cur)
      : console.log('not all items are number');
  return total
}
let a = [3, 'a', 7, '', 13]
console.log(sumOfArray(a));

//question 13
function average(array) {
  sum = 0

  for (let i = 0; i < array.length; i++)
    typeof array[i] == 'number'
      ? sum += array[i]
      : console.log('not all items are number');
  return sum / array.length
}
console.log(average(x));

//question 14
function modifyArray(array) {
  array.length >= 5
    ? array[4] = 10
    : console.log('item not found');
  return array
}
console.log(modifyArray(x));

//question 15 unsolved
console.log(isPrime(15));

function isPrime(num) {
  if (num < 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return num
}
console.log(isPrime(9))
//question 16
const checkUniqueness = (array) => {
  //  used to avoid duplicate in an array
  //   array.reduce((acc, cur) => {
  //     if (acc.indexOf(cur) === -1) {
  //       acc.push(cur)
  //     }
  //     return true
  //   }, [])

  let empty = {}
  for (let i = 0; i < array.length; i++) {
    return empty[array[i]]
      ? false : empty[array[i]] = true
  }
  return true
}
let b = [2, 3, 4, 4, 4, 9, 2]
console.log(checkUniqueness(b));

//question 17
const checkDtataTypes = (array) => {
  for (let i = 0; i < array.length; i++)
    typeof array[i] == 'number'
  return true
}
console.log(checkDtataTypes(x));

//question 18
const isValidVariable = (variable) => {
  return variable.match(/^[\w$+]/)
    ? true : false
}
console.log(isValidVariable('-aaish'));

//question 19
function arrayOfNumbers() {
  let object = {}
  let arrayOfUniqueNumbers = []
  for (let i = 0; i <= 7; i++) {
    let random = Math.floor(Math.random() * 10)
    arrayOfUniqueNumbers.push(random)
  }
  let newArray = arrayOfUniqueNumbers.reduce((acc, cur) => {
    acc[cur] ? null : acc[cur] = 1
    return acc
  }, [])
  return Object.keys(newArray)
}
console.log(arrayOfNumbers());

//question 20
function reverseArray(array) {
  let reversed = array.reverse()
  return reversed
}
console.log(reverseArray(b));

;