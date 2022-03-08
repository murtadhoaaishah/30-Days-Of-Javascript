//level 1
//question 1
localStorage.setItem('firstName', 'Aaishah')
localStorage.setItem('lastName', 'Murtadho')
localStorage.setItem('age', 15)
localStorage.setItem('country', 'Nigeria')
localStorage.setItem('city', 'Lagos')

console.log(localStorage);

//level 2
//question 1
//student object will have first name, 
//last name, age, skills, country, 

const student = {
    firstName: 'Khadijah',
    lastName: 'Kabeer',
    age: 15,
    skills: ['HTML', 'CSS', 'Javascript', 'Node'],
    country: 'Niger'
}
const stringedStudent = JSON.stringify(student, undefined, 1)
localStorage.setItem('student', stringedStudent)

//level 3
//question 1
const personAccount = {
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
let stringedPersonAcc = JSON.stringify(personAccount, undefined, 1)
localStorage.setItem('personAccount', stringedPersonAcc)
console.log(localStorage);