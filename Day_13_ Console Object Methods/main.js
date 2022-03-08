import { countries } from "../countries_data.js"
//level 2
//question 1
console.table([countries]);

//question 2
console.table(countries)

//question 3
console.group(countries)

//level 2
//question 1
console.assert(10 > (2 * 10))

//question 2
console.warn('you are fucking crazy')

//question 3
console.error('You must be mad')

//level 3
let nigeria = [
    ['Adamawa', 'Yola'],
    ['Bornu', 'Maiduguri'],
    ['Oyo', 'Ibadan'],
    ['Lagos', 'Ikeja']
]
console.time('Regular for loop')
for (let i = 0; i < nigeria.length; i++) {
    console.log(nigeria[i][0]);
}
console.timeEnd('Regular for loop')

console.time('Regular for loop')
for (const [state, capital] of nigeria) {
    console.log(state, capital);
}
console.timeEnd('Regular for loop')

console.time('forEach loop')
nigeria.forEach(([state, capital]) => {
    console.log(state, capital)
}
)
console.timeEnd('forEach loop')
