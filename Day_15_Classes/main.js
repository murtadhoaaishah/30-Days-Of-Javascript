//level 1
//question 1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
        this.breed = ''
    }
    getInfo() {
        return `The name of my pet is ${this.name}. it is ${this.age} years.
        it has ${this.color} around its ${this.legs} legs`
    }
    get getBreed() {
        return this.breed
    }
    set setBreed(breed) {
        return this.breed = breed
    }
}

let animal1 = new Animal('Bingo', 3, 'brown', 4)
animal1.setBreed = 'cartisian'
console.log(animal1);
console.log(animal1.breed);

//question 2
class Dog extends Animal {

}
let dog = new Animal('zeezee', 2, 'white', 3)
console.log(dog.getInfo());


class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs, breed)
        this.breed = breed;

        return this.color
    }
    get getAge() {
        return this.age
    }
    set setAge(age) {
        return this.age = age
    }
}
let cat = new Animal('jawe', 5, 'red', 5, 'local')
console.log(cat);
console.log(cat.getInfo());

//level 2
//quetion 1
cat.setColor = 'white'
cat.setAge = 2
cat.setBreed = 'foreign'
console.log(cat);

//level 3
//question 1
class Statistics {
    constructor(age
        /*   mean,
          median,
          mode,
          range,
          variance,
          standardDeviation,
          min,
          max,
          count,
          frequency */
    ) {
        this.age = age

        /*  this.mean = mean,
             this.median = median,
             this.mode = mode,
             this.range = range,
             this.variance = variance,
             this.standardDeviation = standardDeviation,
             this.min = min,
             this.max = max,
             this.count = count,
             this.frequency = frequency */
    }
    getMean() {
        let mean = this.age.reduce((acc, cur) =>
            acc + cur, 0) / this.age.length
        return mean
    }
    getMedian() {
        let middleNum = (this.age.length + 1) / 2
        this.age.sort((a, b) => a - b)
        return this.age % 2 === 1
            ? this.age[middleNum + 1]
            : this.age[(middleNum + (middleNum + 1) / 2)]
    }
    geMode() {
        let mode = this.age.reduce((acc, cur) => {
            acc[cur] ? acc[cur]++ : acc[cur] = 1;
            return acc
        }, [])
        return Object.entries(mode).sort((a, b) => b[1] - a[1])[0]
    }
    getMin() {
        let min = Math.min(...this.age)
        return min
    }
    getMax() {
        let max = Math.max(...this.age)
        return max
    }
    getRange() {
        let minimum = Math.min(this.age)
        let maximum = Math.max(this.age)
        let range = maximum - minimum
        return range
    }
    getVariance() {
        let x = this.getMean()
        let y = []
        for (const ages of this.age) {
            y.push(Number((ages - x).toFixed(2)))
        }
        let sum = y.reduce((acc, cur) => acc + cur)
        return sum / this.age.length
    }
    getStandardDeviation() {
        let y = this.getVariance()
        let standardDeviation = Math.sqrt(y)
        return standardDeviation
    }
    getCount() {
        let count = this.age.length
        return count
    }
}
let stat = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27,
    27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(stat.getMean());
console.log(stat.getMedian());
console.log(stat.getMode());
console.log(stat.getMin());
console.log(stat.getMax());
console.log(stat.getVariance());
console.log(stat.getStandardDeviation());
console.log(stat.getCount());



