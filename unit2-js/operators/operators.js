// equals operator
let white = 10
let yellow = 4

yellow = white
console.log("white:", white)
console.log("yellow:", yellow)

// arithmetic operators
let red = white + yellow
console.log("red:", red)
//modulos
console.log(3%2)

// assignment operators
let blue = 5
blue += yellow
console.log("blue:", blue)
let purple = 2
white -= purple
console.log("yellow:", yellow)

// comparison operators
console.log("white equal yellow?", white == yellow)
let yellow2 = "10"
console.log("yellow and yellow2", yellow == yellow2)
console.log("yellow and yellow2 again", yellow === yellow2)
console.log("and and AND", "and" == "AND")

// logical operators
console.log("---------logic---------")
//and
console.log(true && true)
console.log(true && false)
console.log(false && false)
// console.log(yellow === 8 && white === 10)
//or
console.log(true || true)
console.log(true || false)
console.log(false || false)
//not
console.log(!true)
console.log(!false)