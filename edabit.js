// let findPerimeter = (length, width) => (length + width) * 2;
// console.log(findPerimeter(2,3));

//const { flattenDiagnosticMessageText } = require("typescript")

// const { ImportsNotUsedAsValues } = require("typescript")

// let nextEdge = (side1, side2) => side1 + side2 - 1;
// console.log(nextEdge(3,4))

// let lessThanOrEqualToZero = num => num <= 0;
// console.log(lessThanOrEqualToZero(-2))

// const giveMeSomething = a => `something ${a}`;
// console.log(giveMeSomething('bob, jane'));

// const result = (name) => `${name}edabit`;
// console.log(result('matt'));

// const animals = (chickens, cows, pigs) => chickens * 2 + (cows + pigs) * 4;

// const and = (a, b) => a && b;

// function printArray(number) {
//     var newArray = [];
//
//     for(var i = 1; i <= number; i++) {
//         newArray.push(i);
//     }
//
//     return newArray;
// }
//
// console.log(printArray(3));
//
// const calculateFuel = n => Math.max(100, n*10);
//
// console.log(calculateFuel(3));

// const calculator = str => Function(`'use strict'; return (${str})`)();

// // const isEven = n => n%2 === 0;
// const isEven = n => !(n % 2);

// const reversePsychology = s => !s ? `Do not do anything.` : `Do not ${s}.`;
// const reversePsychology = s => `Do not ${s || "do anything"}.`;
// console.log(reversePsychology('a'));

// function operate(num1, num2, operator){
//     return Function(`'use strict'; return (
// 	${num1}${operator}${num2})`)();
// }
//
// console.log(operate(2,1,"+"))

// function sumFive(arr) {
//     return arr.reduce((a, b) => b > 5 ? a + b : a, 0);
// }
//
// function sumFive(arr) {
//     return arr.filter(x => x > 5).reduce((a, b) => a + b, 0);
// }

// function sumFive(arr){
//     const filtered = arr.filter(function(n){
//         return n > 5});
//         return  filtered.reduce((x, y) => x + y, 0)
// }

// sortWord = w => [...w].sort().join("")
// console.log(sortWord("dcba"));

// function equilibrium(x){
//     return x >0 ? "positive"
//         : x <0 ? "negative"
//             : true
// }
// const equilibrium = x => x > 0 ? 'positive' : x < 0 ? 'negative' : true;

// invertArray = arr => arr.map(x => ~x + 1)

//concat = (arr1, arr2) => [...arr1, ...arr2]

// flipBool = b => ~b + 2
// flipBool = b => b ? 0 : 1

// parseArray = arr => arr.map(x => x.toString())
// parseArray = a => a.map(String)

// longestString = (str1, str2) => [...new Set([...str1, ...str2])].sort().join("")
// function longestString(str1, str2){
//     return Array.from(new Set(str1 + str2)).sort().join('')
// }

// evenOrOdd = arr => arr.reduce
//     ( (a, b) => a+b, 0) % 2 === 0 ? "even" : "odd"

// findIndex = (arr, str) => arr.indexOf(str)

// function areTrue(a, b) {
//     return a == true ? b === true ? 'both' : 'first'
//         : b !== true ? 'neither' : 'second'
// }
//
// function areTrue(a, b) {
//     return a && b ? 'both'
//         : a ? 'first'
//             : b ? 'second'
//                 : 'neither'
// }

// parity = n => n % 2 === 0 ? `even` : 'odd'
// parity = n => [`even`, `odd`][n & 1]
// parity = n => ['even', 'odd'][n % 2] // does not work with negative numbers

// elementSet = s => [...s] [0]
// const first = new Set();
// first.add(1);
//
// console.log(elementSet(first))

// comp = (str1, str2) => str1.length === str2.length

// oddOrEven = s => [true, false] [s.length %2]
// oddOrEven = s => s.length % 2 === 0

// forbiddenLetter = (char, arr) => !JSON.stringify(arr).includes(char)

// function secret(text)
// {
//     const split = text.split('*');
//     const content = `<${splitted[0]}></${splitted[0]}>`;
//     return content.repeat(split[1])
// }
// const secret = text => {
//     const [a, b] = text.split`*`;
//     return `<${a}></${a}>`.repeat(b);
// }

// isEvenOrOdd = n => n % 2 : 'even', 'odd'

// absolute = n =>
//      Math.sign(n) === -1
//         ? parseFloat(JSON.stringify(n).slice(1)) : n

// absolute = n => n < 0 ? -n : n

// numArgs = (...a) => a.length

// hasSameBread = (arr1, arr2) => arr1[0] === arr2[0] && a=>rr1[2] === arr2[2]

// cityFacts = city =>
//     `${city.name} has a population of ${city.population} and is situated in ${city.continent}`

// firstLast = name => `${name.charAt(0)}${name.charAt(name.length-1)}`
// const firstLast = n => n[0] + n.slice(-1);

// const evenOddString = s =>
//     [...s].filter((_, i) => !(i % 2)).join`` +' '+
//     [...s].filter((_, i) =>   i % 2 ).join`` ;

// firstOne = (a, b, c, d) => a || b || c || d || 'not found'
// firstOne = (...args) => args.find(Boolean) || 'not found';

// stutter = word =>
//     `${word.substr(0,2)}... ${word.substr(0,2)}... ${word}?`
// stutter = word => `${`${word.slice(0, 2)}... `.repeat(2)}${word}?`


// intToString = num => String(num)
// stringToInt = num => Number(num)
// [intToString, stringToInt] = [String, Number]
// const str = '[head, ...tail] = [1, 2, 3, 4]'

// fifth = (...a) => a.length >=5 ? typeof a[4] : 'Not enough arguments'
// fifth = (...a) => a.length < 5 ? "Not enough arguments" : typeof a[4]

// greaterThanOne = frac => Function(`return (${frac})`)() >1

// moodToday = mood => mood ? `Today, I am feeling ${mood}`:
//     `Today, I am feeling neutral`
// moodToday = mood => `Today, I am feeling ${mood || "neutral"}`

// rotateMaxNumber = num => 1*[...num.toString()].sort().reverse().join('')

// validStrNumber = n => !isNaN(n)

// countSyllables = str => str.length / 2

// weightAllowed = (car, p, maxWeight) => (car + p.reduce((a,b)=> a+b, 0))*0.453592 < maxWeight

// match = (s1, s2) => s1.toLowerCase() === s2.toLowerCase()
// area = (h, w) => (h && w) > 0 ?  h * w : -1

// length = s =>  s.lastIndexOf(s.charAt(-1))
// length = s => s.lastIndexOf('')

// leapYear = y =>  !(y & 3 || y & 15 && !(y % 25))

// getMultipliedArr = arr => arr.map(n => n*2)

// notShare = (arr1, arr2) => (arr1.filter(x => !arr2.includes(x)))
//     .length === arr1.length
// notShare = (a,b) => a.every(c => !b.includes(c))

// intOrString = p => typeof p == 'string' ? 'str' : 'int'
// const intOrString=p=>
//     +p?"int":"str"

// volPizza = (r, h) => Math.round(Math.PI * r * r * h)
// volPizza = (r,h) => Math.PI * r * r * h + .5 | 0

// fiftyThirtyTwenty = ati =>
//     budget = {
//         'Needs': ati * .5,
//         'Wants': ati * .3,
//         'Savings': ati * .2
//     }

// volumeOfBox = ({width, length, height}) => width * length * height

// const relations = {
//     'Darth Vader': 'father',
//     'Leia': 'sister',
//     'Han': 'brother in law',
//     'R2D2': 'droid'
// }
//
// relationToLuke= name =>
//     `${name}, I am your ${relations[name]}.`

// class Player {
//     constructor(name, age, height, weight) {
//         this.name = name;
//         this.age = age;
//         this.heigth = height;
//         this.weighth = weight;
//     }
//
//     getAge = () => `${this.name} is age ${this.age}`
//     getHeight = () => `${this.name} is ${this.heigth}cm`
//     getWeight = () => `${this.name} weighs ${this.weighth}kg`
//
// }

// jayAndBob = str => str === 'half' ? `14 grams`
//     : str === 'quarter' ? '7 grams'
//         : str === 'eighth' ? '3.5 grams'
//             : '1.75 grams'


// isInRange = (num, range) =>
//     num >= Object.values(range)[0] && num <= Object.values(range)[1]
// const isInRange = (num, range) => num >= range.min && num <= range.max;

// isInRange = (num, range) =>
//     num >= Object.values(range)[0] && num <= Object.values(range)[1]
// const isInRange = (num, range) => num >= range.min && num <= range.max;

// hasSpaces = str => str.includes(' ')

// countdown = start => [...Array(start+1).keys()].reverse()

// rangeOfNum = (s, e) => Array.from({length:e-s-1}, () => 1+s++)

// concatName = (f, l) => `${l}, ${f}`

// findBob= names => names.indexOf('Bob')

// toNumberArray = a => a.map(Number)
//
// console.log(toNumberArray(["7", "8"]))

// hasSpaces = str => str.includes(' ')

// countdown = start => [...Array(start+1).keys()].reverse()

// rangeOfNum = (s, e) => Array.from({length:e-s-1}, () => 1+s++)

// concatName = (f, l) => `${l}, ${f}`

// findBob= names => names.indexOf('Bob')

// toNumberArray = a => a.map(Number)
//
// console.log(toNumberArray(["7", "8"]))

// const divisibleByFive = n => n % 5 === 0

// divisible = n => !(n%100)

// dividesEvenly = (a, b) => !(a%b)

// arrayValuesTypes = a => a.map(x=>typeof x)

// sumCubes = n => [...Array(n)].map((_,i) => (i+1)**3).reduce((a,b) => a + b)
// sumCubes = n => (n * (n + 1) / 2) ** 2

// acceptIntoMovie = (a, s) => a>=15 || s

// function whoWinsTonight(coins, space, price, size)
// {
//     const b = Math.floor(coins/price);
//     const w = Math.floor(space/size);
//     return b > w ? "Bill"
//          : w > b ? "Will"
//             :  "Tie"
// }

// rotateByOne = a => [a.pop(), ...a]

// addBinary = (a, b) => (a+b).toString(2)

// imposterFormula = (i, p) => Math.round((i/p)*100)+'%'

// isOdd = n => n%2 !== 0

// function areaShape(b, h, s) {
//     return s === 'triangle' ? b * h / 2
//         : b * h
// }
// function areaShape(b,h,s) {
//     return (s === 'triangle' ? 0.5 : 1) * b * h;
// }

// frontThree = s => s.slice(0,3).repeat(3)

// const cleanUpArray = a => {
//     const e = a.filter((i) => i % 2 === 0).map(Number);
//     const o = a.filter((i) => i % 2 !== 0).map(Number);
//     return [e, o]
// }
// const cleanUpArray = arr => arr.reduce((a, c) => (a[c%2].push(+c), a), [[], []]);

// function areaOfHexagon(x){
//     return x >0 ? +(3 * Math.sqrt(3) * x * x / 2).toFixed(1)
//         : null
// }
// const areaOfHexagon = s => s > 0 ? Math.round(26 * s * s) / 10 : null

// function word(s) {
//    return s === 'one' ? 1
//             : s === 'two' ? 2
//             : s === 'three' ? 3
//                 : s === 'four' ? 4
//                     : s === 'five' ? 5
//                         : s === 'six' ? 6
//                             : s === 'seven' ? 7
//                                 : s === 'eight' ? 8
//                                     : s === 'nine' ? 9
//                                        : 0
// }
// word=s=>["zero","one","two","three","four","five","six","seven","eight","nine"].indexOf(s)

// carsNeeded = n => Math.ceil(n/5)

// binaryToDecimal = a => parseInt(a.join(''), 2)
// binaryToDecimal=r=>parseInt(r.join``,2)

// kineticEnergy = (m, v) => Math.round(m/2 * v**2)
// kineticEnergy = (m, v) => Math.round(m/2 * v*v)

// isLastCharacterN = w => w.endsWith('n')

// const nTablesPlusOne = n => ''+[...Array(10)].map((_,i) => n * ++i + 1);
// function nTablesPlusOne(n) {
//     const result = [];
//     for(let i = 1;i<=10;i++){
//         result.push((n*i)+1);
//     }
//     return result.toString();
// }

// function getContainer(product) {
//     let container
//     switch (product) {
//         case "Bread":
//             container = "bag";
//             break;
//         case "Beer":
//         case "Milk":
//             container = "bottle";
//             break;
//         case "Cerials":
//             container = "box"
//             break;
//         case "Eggs":
//             container = "carton"
//             break;
//         case "Candy":
//             container = "plastic"
//             break;
//         default:
//             container = null
//     }
//     return container
// }

// function getContainer(product) {
//     switch (product) {
//         case "Bread": return "bag";
//         case "Beer":
//         case "Milk": return "bottle";
//         case "Cerials": return "box";
//         case "Eggs": return "carton";
//         case "Candy": return "plastic";
//         default: return null;
//     }
// }

// removeNumbers = s => s.split('').filter(x => isNaN(x)).join('')

// arrBetween = (n1, n2, a) => a.filter(x => x>n1 && x<n2)

// birthdayCakeCandles = c => c.filter
// (i => i === (Math.max.apply(0, c))).length
//
// const birthdayCakeCandles = c =>
//     c.filter(x => x === Math.max(...c)).length;

// isPlural = w => w.substr(-1) === 's'
// isPlural = w => w.endsWith('s')

// equalSlices = (t, p, e) => Math.floor(t/p)===e||p===0
// equalSlices = (t, p, e) => p*e <= t

// starNumber = n => 6*n*(n-1)+1

// twoDigitSum = n => ~~(n/10) + n%10

// otherSides = l => [2*l, l*Math.sqrt(3).toFixed(2)]
// const otherSides = l => [l * 2, +(l * 3 ** 0.5).toFixed(2)];

// journeyDistance = n => n>0 && n<=3 ? 1 : n>3 ? (n-1)/2 : 0
// journeyDistance = n => ~~(n / 2)

// endCorona = (r, n, a) => Math.ceil(a/(r-n))

// checkSquareAndCube = a => Math.sqrt(a[0]) === Math.cbrt(a[1])
// checkSquareAndCube = ([a, b]) => Math.sqrt(a) === Math.cbrt(b)

// amazingEdabit = s => !s.includes('edabit') ? s.replace(/amazing/i, 'not amazing') : s
// amazingEdabit=s=>/edabit/.test(s) ? s : s.replace("is","is not")

// ctoa = c => c.charCodeAt(0)

// outlierNumber = a => a.filter(e=>e&1).length === 1
//     ? a.find(e=>e&1) : a.find(e=>!(e&1))

// bitwiseAND = (a, b) => a &= b
// bitwiseOR = (a, b) => a |= b
// bitwiseXOR = (a, b) => a ^= b
//
// bitwiseAND = (a, b) => a&b
// bitwiseOR = (a, b) => a|b
// bitwiseXOR = (a, b) => a^b

// addUp = n => n * (n+1) /2
// addUp = n => n* ++n/2

// matchHouses = s => s>0 ? 6 + (s-1)*5 : 0
// matchHouses = s => s ? 5*n + 1 :0
// matchHouses = s => s * 5 + !!s
// matchHouses = a => a && a*5 + 1

// shiftToLeft = (x, y) => x * Math.pow(2, y)
// shiftToLeft = (x, y) => x * 2 ** y

// minMax = a => [Math.min(...a), Math.max(...a)]

// timeForMilkAndCookies = d => d.getMonth() === 11 && d.getDate() === 24
// timeForMilkAndCookies = d => /12-24/.test(d.toJSON())

// countTrue = a => a.filter(Boolean).length

// possibleBonus = (a, b) => a < b && b - a <= 6

// shiftToRight = (x, y) => Math.floor(x/2**y)

// colorInvert = rgb => rgb.map(c => 255-c)

// tetra = n => n * (n + 1) * (n + 2) / 6

// triangle = n =>  n* ++n/2

// ascDesNone = (a, b) => b === 'Asc' ?  a.sort((c, d) => (c - d))
//     : b === 'Des' ?  a.sort((c, d) => (d - c)) : a
//
// ascDesNone = (a, b) => b == 'None' ? a :
//     a.sort((x,y) => s == 'Asc' ? x-y : y-x)

// sevenBoom = a => a.join('').includes(7) ? `Boom!` : `there is no 7 in the array`
// sevenBoom = a => /7/.test(a) ? 'Boom!' : 'there is no 7 in the array'


// towerHanoi = d => 2**d-1

// oddishOrEvenish = n => !([...`${n}`].map(Number)
// .reduce((x, y) => x + y) % 2) ?  "Evenish" : "Oddish"

// oddishOrEvenish = n => eval([...n+''].join`+`) % 2
//   ? 'Oddish' : 'Evenish'

// getDays = (a, b) => Math.round((b-a)/(1000*60*60*24))
// getDays = (a, b) => (b-a) / 86400000

// isOdd = n => (n|1) > n ? 'No' : 'Yes'
// isEven = n => (n|1) > n ? 'Yes' : 'No'

// isOdd = n => n&1 > n ? 'No' : 'Yes'
// isEven = n => n&1 > n ? 'Yes' : 'No'
// isOdd = n => ['No', 'Yes'][n & 1]
// isEven = s => ['No', 'Yes'][/[02468]$/.test(n)]

// foil = l => 4 / (2 * Math.PI) + 

// countBoomerangs = a => {
//     c = 0;
//     for(let i = 0; i < a.length; i++){
//         if(a[i] !== a[i+1]  && a[i] === a[i+2]){
//             c++;
//         }
//     }
//  return c;
// }

// function countBoomerangs(arr) {
// 	return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) , 0);
// }

// const toArray = o => Object.entries(o)

// const concat = (...a) => a.flat()

// class Rectangle {
//     constructor(sideA, sideB) {
//       this.sideA = sideA
//       this.sideB = sideB
//     }
//     getArea(){return this.sideA*this.sideB}
//     getPerimeter(){return (this.sideA + this.sideB) *2}
//   }
  
// function largestSwap(num) {
//     return([...num+''][0]>[...num+''][1])
// }

function doesTriangleFit(brick, hole){
	// const brickHalfArea = brick.reduce((a,b) => a + b)/2
    const halfArea = n => n.reduce((a,b) => a + b)/2
    // const holeHalfArea = hole.reduce((a,b) => a + b)/2
    brickHalfArea = halfArea(brick)
    holeHalfArea = halfArea(hole)
    // const heronBrick = Math.sqrt( brickHalfArea *(brick.map(e => brickHalfArea-e).reduce((a,b)=> a * b)))
    // const heronHole = Math.sqrt( holeHalfArea *(hole.map(e => holeHalfArea-e).reduce((a,b)=> a * b)))
    const heron = n => Math.sqrt(halfArea(n))*(n.map(e => halfArea(n)-e).reduce((a,b)=> a*b))
    // const heronBrick = heron(brick)
    // const heronHole = heron(hole)
    return(heron(brick) <= heron(hole))
}

console.log(doesTriangleFit([1, 6, 8], [1, 6, 8]))
