let challenge = '30 Days Of Javascript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(2, 19));
console.log(challenge.substring(2, 22));
console.log(challenge.substring(2));
console.log(challenge.substr(22));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(','));
console.log(social.replace('Javascript', 'python'));
console.log(challenge.charAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.indexOf('because'));
console.log(string.lastIndexOf('because'));
console.log(string.search(/because/gi));
console.log(challenge.trim(''));
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Javascript'));
console.log(challenge.match(/a/gi));
let word = '30 Days Of'
console.log(word.concat('Javascript'));
console.log(challenge.repeat(2));
let statement = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(statement);
let moherTeresa = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(moherTeresa);
console.log((typeof '10') == (typeof 10));
console.log((typeof '9.8') == (typeof 10));
console.log(typeof (Math.round(9.8)) == (typeof 10));
let check = 'found'
console.log(check.includes('on'));
let jarg = 'I hope this course is not full of jargon'
console.log(jarg.includes('jargon'));
console.log(Math.random());
console.log(Math.floor(Math.random() * 101));
let numBtnZeroAndFifty = Math.random() * 51
let numBtnZeroAndHoundred = Math.random() * 101
console.log();
console.log(Math.random() * 256);
let java = 'Javascript'
javaCharacters = Math.round(Math.random() * java.length + 1)
console.log(javaCharacters);
let pattern = `1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`
console.log(pattern);
let trimmedString = 'You cannot end a sentence with '
console.log(trimmedString.concat(string.substr(55, 17)));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let signs = /[%@$#&]/gi
console.log(sentence.replace(signs, ''));
let statement2 = 'Calculate the total annual income of the person by extracting the numbers from the following text. \'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.\''
console.log(statement2.match(/\d+/gi).reduce((acc, current) => Number(acc) + Number(current), 0)
);
console.log(statement2.match(/\d+/gi))
let arr = [200, 400, 500]
console.log(arr.reduce((acc, current) => acc + current, 0))