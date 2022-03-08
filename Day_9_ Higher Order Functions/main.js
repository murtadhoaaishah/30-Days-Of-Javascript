import { countries } from '../countries_data.js'
console.log(countries);


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//level 1
//question 1


// question 2

//question 3
// countries.forEach(function (country) { console.log(country); })

//question 4
names.forEach(function (name) {
    console.log(name);
})

//question 5
numbers.forEach(number => console.log(number))

//question 6
// countries.forEach(function (country) {
//     console.log(country.toUpperCase());
// })

// countries.map(function (country) {
//     console.log(country.toUpperCase());
// })

//question 7
// countries.map(country => console.log(country.length))

//question 8
numbers.map(function (number) {
    console.log(number ** 2);
})

//question 9
names.map(name => console.log(name.toUpperCase()))

//question 10 
const productprice = products.map(product => {
    return (`${product.product}:${product.price}`)
})
console.log(productprice)

//question 11
// let landCountries = countries.filter(country =>
//     country.includes('land'))
// console.log(landCountries);

//question 12
// let sixCharCountries = countries.filter(country =>
//     country.length === 6)
// console.log(sixCharCountries);

// question 13
// let sixOrMoreCharCountries = countries.filter(country =>
//     country.length >= 6)
// console.log(sixOrMoreCharCountries);

//question 14
// let countriesStartingWithE = countries.filter(function
//     (country) {
//     country.startsWith('E')
// })
// console.log(countriesStartingWithE);

//question 15
let pricesWithValues = products.filter(product => typeof product.price === 'number' ? product.price : null
)


// for (let i = 0; i < products.length; i++) {
//     if (typeof products.price === 'number') {
//         console.log(products.price)
//     }
// }

console.log(pricesWithValues)
//question 16
function getStringLists(array) {
    const c = array.filter((array, i) => typeof array === 'string')
    return c

}

const a = [1, 4, 'r']
console.log(getStringLists(a))

//question 17
let sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum);

//question 18
// let newCountries = countries.split(',')
// let allCountries = countries.reduce((acc, cur) => acc + ', ' + cur, Estonia)

// console.log(countries.join(', '))
// console.log(allCountries + " are north European countries");
// console.log(allCountries)
//question 19

//question 20
let checkName = names.some((name) => name.length > 7)
console.log(checkName);

//question 21
// let checkCountry = countries.every((country) =>
//     country.includes('land'))
// console.log(checkCountry);

//question 22

//question 23
// let firstCountry = countries.find((country) => country.length === 6)
// console.log(firstCountry);

//question 24
// let firstIndexCountry = countries.findIndex((country) => country.length === 6)
// console.log(firstIndexCountry);

//question 25 unsolved
// let norwayPosition = countries.findIndex((country) => country == 'Norway')
// console.log(norwayPosition);

//question 26
// let russiaPosition = countries.findIndex((country) => country == 'Russia')
// console.log(russiaPosition);
//level 2
//question 1 
let price = products.filter(product => typeof product.price === 'number'
    ? product.price : null).reduce((acc, cur) => acc + cur.price, 0)
console.log(price);

//question 2
for (let i = 0; i < products.length; i++) {
    if (typeof products.price === 'number')
        products.reduce((acc, cur) =>
            acc + cur.price, 0)
}
console.log(price);
// let countriess = ['naija', 'angola', 'zimbabwe', 'kenya', 'finland', 'island',
//     'jeju-island', 'bolivia', 'islambodia']


//question 3
const categorizeCountries = () => {
    let category = countries.filter((country) =>
        country.name.endsWith('ia'))
    return category
}
console.log(categorizeCountries(countries));


//question 4
function letterAndNumOfTimes() {
    let letters = countries.map((country) =>
        country.name.slice(0, 1)).reduce((acc, cur) => {
            acc[cur] ? acc[cur] += 1 : acc[cur] = 1
            return acc
        }, [])

    return letters
}
console.log(letterAndNumOfTimes(countries))

//qustion 5

function getFirstTenCountries() {
    let firstTenCountries = countries.map((country) =>
        country.name).slice(0, 10)
    return firstTenCountries
}
console.log(getFirstTenCountries(countries));

//question 6
function getLastTenCountries() {
    let lastTenCountries = countries.map((country) =>
        country.name).slice(-10)
    return lastTenCountries
}
console.log(getLastTenCountries(countries));

//question 7
function getighestInitial() {
    let initial = countries.map((country) =>
        country.name.slice(0, 1))
        .reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1
            return acc
        }, [])
    return initial
}
console.log(getighestInitial(countries));

//level 3
//question 1
let sortedNames = countries.map((country) => country.name)
console.log(sortedNames);

let sortedLanguages = countries.map((country) => country.languages)
console.log(sortedLanguages.flat(5));

let sortedPopulation = countries.map((country) => country.population)
console.log(sortedPopulation);

//question 2
function tenMostSpokenLanguages() {
    let mostSpokenLanguages = countries.map((country) => country.languages)
        .join().split(',')
        .reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1
            return acc
        }, [])

    let spokenLang = Object.entries(mostSpokenLanguages).sort((a, b) =>
        b[1] - a[1]).slice(0, 10)
    return spokenLang
}

console.log(tenMostSpokenLanguages(countries));

//question 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

function meanAge() {
    let mean = ages.reduce((acc, cur) => acc + cur, 0) / ages.length
    return mean
}
console.log('Mean:', meanAge());


function medianAge() {
    let middleNum = (ages.length + 1) / 2
    ages.sort((a, b) => a - b)
    return ages % 2 === 1
        ? ages[middleNum + 1]
        : ages[(middleNum + (middleNum + 1) / 2)]
}
console.log('Median:', medianAge());


function modalAge() {
    let mode = ages.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc
    }, [])
    return Object.entries(mode).sort((a, b) => b[1] - a[1])[0]
}
console.log('Mode:', modalAge());


function minAge() {
    let min = Math.min(...ages)
    return min
}
console.log('Min:', minAge());


function maxAge() {
    let max = Math.max(...ages)
    return max
}
console.log('Max:', maxAge());


function rangeAge() {
    let minimum = Math.min(...ages)
    let maximum = Math.max(...ages)
    let range = maximum - minimum
    return range
}
console.log('Range:', rangeAge());


function ageVariance() {
    let x = meanAge()
    let y = []
    for (const age of ages) {
        y.push(Number((age - x).toFixed(2)))
    }
    let sum = y.reduce((acc, cur) => acc + cur)
    return sum / ages.length
}
console.log('Variance:', ageVariance());

function ageStandardDeviation() {
    let y = ageVariance()
    let standardDeviation = Math.sqrt(y)
    return standardDeviation
}
console.log('Standard Deviation:', ageStandardDeviation());


function ageFrequency() {
    let frequency = ages.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc
    }, [])
    return frequency
}
console.log('frequency:', ageFrequency());

function ageCount() {
    let count = ages.length
    return count
}
console.log('count:', ageCount());