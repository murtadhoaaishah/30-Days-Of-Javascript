import { countries } from '../countries_data.js'
console.log(countries)
// level 1
//question 1
let dog = {}

//question 2
console.log(dog);

//question 3
dog.name = 'Bingo',
  dog.legs = 4
dog.age = 1
dog.bark = 'woof woof'

//question 4
const values = Object.keys(dog)
// console.log(values);

//question 5
dog.breed = ''
dog.getDogInfo = function name() {
  return `my dog is ${this.name}, it has ${this.legs} legs.`

}
// console.log(dog);

//level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//question 1
const userWithMoreSkills = Object.entries(users).sort((a, b) =>
  b[1].skills.length - a[1].skills.length)[0]
console.log(userWithMoreSkills)

//quetsion 2
let userWithMorePoints = Object.entries(users).filter((user) =>
  user[1].isLoggedIn == true && user[1].points >= 50)
console.log(userWithMorePoints);

//question 3
let mernStackDevelopers = Object.entries(users).filter((user) =>
  user[1].skills.includes('MongoDB') &&
  user[1].skills.includes('Express') &&
  user[1].skills.includes('React') &&
  user[1].skills.includes('Node'))
console.log(mernStackDevelopers);

// question 4
const copyUsers = Object.assign({}, users)
copyUsers.Aaishah = {
  email: 'aishatmurtadho@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript']
}
console.log(copyUsers);

//question 5 
const key = Object.entries(users).map((user) => Object.keys(user[1]))
console.log(key);

//question 6 
const userValues = Object.entries(users).map((user) => Object.values(user[1]))
console.log(userValues);

// question 7
console.log(countries[5].name, countries[5].capital,
  countries[5].population, countries[5].languages);

//level 3
//question 1
const person = {
  firstName: 'Aaishah',
  lastName: 'Murtadho',
  title: 'mernStackDevelopers',
  incomes: {
    allowance: 30000,
    additionalIncome: 5000,
    others: 5000
  },
  addIncome: 5000,
  expenses:
  {
    electricity: 1000,
    transportation: 5000,
    feeding: 24000,
    others: 5000
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
  totalIncome() {
    return Object.entries(this.incomes).reduce((acc, cur) =>
      acc + cur[1], 0)
  },
  totalexpense() {
    return Object.entries(this.expenses).reduce((acc, cur) =>
      acc + cur[1], 0)
  },
  accountInfo() {
    return this.totalIncome() - this.totalexpense()
  },
  getPersonInfo() {
    return `${this.getFullName()}  is a ${this.title}.
    she has a total of ${this.accountInfo()} in a bank account, 
    living with a total of ${this.totalIncome()} and expenses level of 
    ${this.totalexpense()}`
  }
}
console.log(person.getPersonInfo());




const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
const people = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];


//question 2
function signUp(username, email, password) {

  if (people.find(user => user.username === username &&
    user.email === email)) {
    alert('user exist')
    return
  } else {
    people.push({
      username,
      password,
      email,
      _id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false
    })
  }


  function signIn(login, password) {
    if (!login) return 'input required'
    if (!password) return 'password required'

    const userIndex = people.findIndex((user =>
      user.email === login || user.username === login))
    const isIn = people[userIndex].password


    if (userIndex === -1 && isIn !== password) {
      return console.log('sign up')
    } else if (userIndex !== -1 && isIn !== password) {
      return console.log('incorrect password')
    } else {
      return console.log('you are logged in')
    }
  }
  signIn('Alex', 'frtw')
}
signUp('aish', 'aishat@gmail.com', 'eh566123');
signUp('morili', 'ajigi@gmail.com', 'wer123')
signUp('aisha', 'aishat@gmail.com', 'eh566123')


//question 3
const convertArray = (array) => {
  const convertedObject = Object.assign({}, array)
  return convertedObject
}
let arr = [3, 6, 9, 4]
console.log(convertArray(arr));

//question 4
