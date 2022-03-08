//qustion 1
let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let pattern = /[\d]+/g;
let output = text.match(pattern).reduce((acc, cur) =>
    acc + Number(cur), 0)
console.log(output);

//question 2
let input = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"
let pattern2 = /-?[\d]+/g;
let points = input.match(pattern2)
let result = (points[points.length - 1]) - points[0]
console.log(points);
console.log(result);

//question 3 unsolved
let sample = 'firstname',
    pattern5 = /[^\w]/
// let pattern1 = /^[A-Za-z_$][^\w|$]/
let isValid = pattern5.test(sample)
console.log(isValid);

/* function isValid(name) {
    if (/^\d/.test(name)) {
        return false
    } else if (/[^\w$]/.test(name)) {
        return false
    } else {
        return true
    }{{
}
console.log(isValid('first-name')) */
//level 2
//question 1
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(string) {
    let pattern = /[A-Za-z]+/ig
    let words = string.match(pattern).reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, [])
    let mostFrequentWords = Object.entries(words).sort((a, b) =>
        (b[1] - a[1])).slice(0, 10)
    return mostFrequentWords
}
console.log(tenMostFrequentWords(paragraph));

//level 3
//qestion 2
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. jobs There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function textCleaner(string) {
    let replaced = string.replace(/[^\w\s]/g, '').split(' ')//a-aA-z0-9_
    let sortedSentence = replaced.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, [])
    let counts = Object.entries(sortedSentence).sort((a, b) => b[1] - a[1]).slice(0, 3)
    return counts
}
console.log(textCleaner(sentence));