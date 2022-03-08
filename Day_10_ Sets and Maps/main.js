import { countries } from "../countries_data.js"
//level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

//question 1
const iterations = new Set()

//question 2 unsolved
let setNo = new Set()
for (let i = 0; i <= 10; i++) {
    setNo.add(i)
    // const newIterations = new Set(i)
}
console.log(setNo)

//question 3
const newA = new Set(a)
const deletedA = newA.delete(4)
console.log(newA.size);

//question 4
const clearedA = newA.clear()
console.log(newA.size);

//question 5
// const newCountries = new Set(countries)
// const modifiedCountries = newCountries.add('Nigeria')
// newCountries.add('Niger')
// console.log(modifiedCountries.size);

//question 6
const states = [
    ['Abia', 'Umahia'],
    ['Adamawa', 'Yola'],
    ['Anambra', 'Awka'],
    ['Bauchi', 'Bauchi'],
    ['Bayelsa', 'Yenagoa']
]
const newStates = new Map(states)
console.log(newStates);
let charactersOfStates = states.flat(1).filter((state) => console.log(`${state}: ${state.length}`))

//level 2
//question 1
// let c = [...a, ...b]
// let AUB = new Set(c)
// console.log(AUB);

//question 2 unsolved

let A = new Set(a)
let B = new Set(b)

// let AnB = A.filter((num) => console.log(B.has(num)))
let c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C)

//question 3
let aWithB = [...a, ...b]
console.log(aWithB);

//level 3
//question 1
let noOfLanguage = countries.map((country) =>
    country.languages).flat(1)//.length
console.log(noOfLanguage);

//question 2
let firstTenLanguages = countries.map((country) =>
    country.languages).join().split(',').reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, [])
let sorted = Object.entries(firstTenLanguages)
    .sort((a, b) => b[1] - a[1]).slice(0, 10)
console.log(sorted);

//question 3
