import { countries } from "../countries_data.js"
//level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],



        ge: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
//question 1
let [const1, const2, const3] = constants
console.log(const1, const2, const3);

//question 2
// let [fin, est, sw, den, nor] = countries
// console.log(fin, est, sw, den, nor);

//question 3
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter);

//level 2 
//question 1
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}


//question 2
let userWithLessSkilss = users.filter((user) => user.skills.length < 2)
console.log(userWithLessSkilss);

//level 3
//question 1
for (const { name, population, languages, capital } of countries) {
    console.log(name, population, languages, capital);
}

//question 2
const studentss = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95],]
for (const [name, skills, jsScore, reactScore] of studentss) {
    console.log(name, skills, jsScore, reactScore)
}

//question 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(array) {
    for (const [name, skills, scores] of students)
        // let convertedArray = Object.assign({}, array)
        // return convertedArray
        return console.log(name, skills, scores);
}
convertArrayToObject(students);

//question 4 unsolved
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
let newStudent = [...student,
[...frontEnd, { skills: Bootstrap, level: 8 }],
[...backEnd, { skills: Express, level: 9 }],
[...dataBase, { skills: SQL, level: 8 }],
[...dataScience, { skills: SQL }]
]
console.log(newStudent);
for (const [name, age, { }] of student) {

}